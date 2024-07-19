export interface RecordType {
  archived: boolean;
  createdAt: string;
  id: string;
  properties: {
    [key: string]: any;
  };
  updatedAt: string;
}

export interface PublicObjectSchemaType {
  archived: boolean;
  associations: {
    [key: string]: any;
  }[];
  createdAt: string;
  fullyQualifiedName?: string;
  id: string;
  labels: {
    singular: string;
    plural: string;
  };
  name: string;
  objectTypeId: string;
  primaryDisplayProperty: string;
  properties: {
    [key: string]: any;
  }[];
  requiredProperties?: string[];
  searchableProperties: string[];
  secondaryDisplayProperties: string[];
  updatedAt: string;
}

export interface TemplateType {
  createdAt: string;
  documentNamePattern: string;
  id: string;
  isActive: boolean;
  name: string;
  thumbnail: {
    extension: string;
    updatedAt: string;
    url: string;
  };
  updatedAt: string;
}