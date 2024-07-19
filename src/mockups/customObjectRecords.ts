import type { RecordType } from './types';

export const customObjectRecords: RecordType[] = [
  {
    id: '1',
    createdAt: '2021-01-01T00:00:00Z',
    updatedAt: '2021-01-01T00:00:00Z',
    archived: false,
    properties: {
      name: 'apple',
      sku: '4859851161604',
      price: 100,
      inStock: true,
      category: 'fruit',
    },
  },
  {
    id: '2',
    createdAt: '2021-01-01T00:00:00Z',
    updatedAt: '2021-01-01T00:00:00Z',
    archived: false,
    properties: {
      name: 'banana',
      sku: '4859851161605',
      price: 50,
      inStock: true,
      category: 'fruit',
    },
  },
  {
    id: '3',
    createdAt: '2021-01-01T00:00:00Z',
    updatedAt: '2021-01-01T00:00:00Z',
    archived: false,
    properties: {
      name: 'carrot',
      sku: '4859851161606',
      price: 10,
      inStock: true,
      category: 'vegetable',
    },
  },
];
