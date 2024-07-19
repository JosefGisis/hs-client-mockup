import reverse from 'lodash/reverse';
import take from 'lodash/take';
import takeRight from 'lodash/takeRight';
import round from 'lodash/round';
import isInteger from 'lodash/isInteger';

export type Format = 'Letter' | 'Legal' | 'Tabloid' | 'A3' | 'A4' | 'A5' | 'A6';

interface GetPageDimensionsProps {
  format?: Format;
  isLandscape?: boolean;
  width: string | number;
  height: string | number;
  ppi?: number;
}

export function getPageDimensions({ format, isLandscape, width, height, ppi = 96 }: GetPageDimensionsProps) {
  width = convertUnit(width, { returnNumber: true });
  height = convertUnit(height, { returnNumber: true });

  let result: [number | string, number | string] = [612, 729];
  let dimensions = [width, height];

  const formatDimensionMap: { [k in Format]: [string, string] } = {
    Letter: ['8.5in', '11in'],
    Legal: ['8.5in', '14in'],
    Tabloid: ['11in', '17in'],
    A3: ['297mm', '420mm'],
    A4: ['210mm', '297mm'],
    A5: ['148mm', '210mm'],
    A6: ['105mm', '148mm'],
  };

  if (format) dimensions = formatDimensionMap[format];

  const conversionOptions = { ppi, precision: 0 };

  if (dimensions && dimensions.length === 2) {
    result = [convertUnit(dimensions[0], conversionOptions), convertUnit(dimensions[1], conversionOptions)];
  }
  if (isLandscape) result = reverse(result);

  return { width: result[0], height: result[1] };
}

export type Unit = 'px' | 'in' | 'mm' | 'cm';

export interface ConvertUnitProps {
  outputUnit?: Unit;
  ppi?: number;
  precision?: number;
  returnNumber?: boolean;
}
/**
 * Converts from one unit value to another
 * @param {String} unitValue ex: 1in
 * @param {Object} [options]
 * @param {String} [options.outputType='px']
 * @param {Number} [options.ppi=96]
 * @returns
 */
export function convertUnit(
  input: string | number,
  { outputUnit = 'px', ppi = 96, precision, returnNumber = false }: ConvertUnitProps,
): number | string {
  const unitToInchMap: { [k in Unit]: number } = { px: ppi, in: 1, mm: 25.4, cm: 2.54 };

  let inputValue;
  let inputUnit: Unit = 'px';

  // Parse input value and unit from string
  if (typeof input === 'string') {
    const inputValueStr = take(input, input.length - 2).join('');
    inputValue = parseFloat(inputValueStr);
    if (isNaN(inputValue)) return input;
    const unit = takeRight(input, 2).join('') || '';
    if (Object.keys(unitToInchMap).includes(unit)) inputUnit = unit as Unit;
  } else {
    inputValue = input;
  }

  let outputValue;

  //Return the input value if input unit and output unit are the same
  if (inputUnit === outputUnit) {
    outputValue = inputValue;
  } else {
    // convert incoming unit into inches to get pixels
    const valueInInches = inputValue / unitToInchMap[inputUnit];
    outputValue = valueInInches * unitToInchMap[outputUnit];
  }

  // Apply precision
  if (precision !== undefined && isInteger(precision)) outputValue = round(outputValue, precision);

  return returnNumber ? outputValue : `${outputValue}${outputUnit}`;
}

export type Property = {
  name: string;
  label: string;
  groupName: string;
  type: 'string' | 'number' | 'enumeration' | 'datetime' | 'bool';
  [x: string | number | symbol]: unknown;
};

export function parseProperties(properties: Property[]) {
  properties.map((property: Property) => ({}));
}

const escapeRegExp = (str: string) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const fuzzyMatch = (pattern: string, str: string) => {
  pattern =
    '.*' +
    pattern
      .split('')
      .map((l) => `${escapeRegExp(l)}`)
      .join('') +
    '.*';
  const re = new RegExp(pattern, 'ig');
  return re.test(str);
};

const defaultExport = { getPageDimensions, convertUnit, parseProperties, fuzzyMatch };

export default defaultExport;
