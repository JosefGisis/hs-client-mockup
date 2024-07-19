import { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';

const SearchButtonInput = ({ onChange }: { onChange?: (value: string) => void }) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    setShowInput((cur) => !cur);
  };

  useEffect(() => {
    onChange?.(value);
  }, [onChange, value]);

  // Used as a work-around because focusing from event handler doesn't work
  useEffect(() => {
    if (showInput) inputRef.current?.focus();
  }, [showInput]);

  const inputStyle = { padding: '8px 0px 8px 40px', minWidth: '0px', width: '30px' };
  if (showInput) inputStyle.width = '200px';

  return (
    <div>
      <span className='p-input-icon-left p-icon-'>
        <i className='pi pi-search cursor-pointer' onClick={handleButtonClick} />
        <InputText
          placeholder='Search'
          value={value}
          style={inputStyle}
          ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
          className={showInput ? '' : 'cursor-pointer'}
          onFocus={() => setShowInput(true)}
        />
        {showInput && value !== '' && (
          <i className='pi pi-times cursor-pointer -ml-8 pi-small' onClick={() => setValue('')} />
        )}
      </span>
    </div>
  );
};

export default SearchButtonInput;
