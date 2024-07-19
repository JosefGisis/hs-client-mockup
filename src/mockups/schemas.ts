import type { PublicObjectSchemaType } from "./types";

export interface ContactSchemaType extends PublicObjectSchemaType {
  id: '1';
  name: 'CONTACT';
  objectTypeId: '0-1';
  labels: {
    singular: 'Contact';
    plural: 'contacts';
  };
  primaryDisplayProperty: 'firstname';
  searchableProperties: [
    'firstname',
    'hs_searchable_calculated_international_phone_number',
    'lastname',
    'hs_marketable_until_renewal',
    'hs_marketable_status',
    'hs_additional_emails',
    'phone',
    'mobilephone',
    'hs_searchable_calculated_phone_number',
    'hs_searchable_calculated_mobile_number',
    'hs_searchable_calculated_international_mobile_number',
    'company',
    'fax',
    'email',
  ];
  secondaryDisplayProperties: ['lastname', 'email', 'phone'];
}

export interface CompanySchemaType extends PublicObjectSchemaType {
  id: '2';
  name: 'COMPANY';
  objectTypeId: '0-2';
  labels: {
    singular: 'Company';
    plural: 'companies';
  };
  primaryDisplayProperty: 'name';
  searchableProperties: ['website', 'phone', 'domain', 'name'];
  secondaryDisplayProperties: ['phone', 'domain'];
}

export interface DealSchemaType extends PublicObjectSchemaType {
  id: '3';
  name: 'DEAL';
  objectTypeId: '0-3';
  labels: {
    singular: 'Deal';
    plural: 'deals';
  };
  primaryDisplayProperty: 'dealname';
  searchableProperties: ['pipeline', 'dealname', 'dealstage', 'description', 'dealtype'];
  secondaryDisplayProperties: ['dealstage', 'dealtype'];
}

export interface TicketSchemaType extends PublicObjectSchemaType {
  id: '5';
  name: 'TICKET';
  objectTypeId: '0-5';
  labels: {
    singular: 'Ticket';
    plural: 'tickets';
  };
  primaryDisplayProperty: 'subject';
  searchableProperties: [
    'hs_ticket_category',
    'hs_ticket_id',
    'hs_all_associated_contact_firstnames',
    'hs_all_associated_contact_mobilephones',
    'hs_all_associated_contact_phones',
    'subject',
    'hs_all_associated_contact_companies',
    'hs_pipeline_stage',
    'hs_all_associated_contact_lastnames',
    'content',
    'hs_all_associated_contact_emails',
  ];
  secondaryDisplayProperties: ['createdate', 'closed_date', 'hubspot_owner_id', 'hs_pipeline_stage'];
}

export interface LineItemSchemaType extends PublicObjectSchemaType {
  id: '8';
  name: 'LINE_ITEM';
  objectTypeId: '0-8';
  labels: {
    singular: 'Line Item';
    plural: 'Line items';
  };
  primaryDisplayProperty: 'name';
  secondaryDisplayProperties: ['price', 'quantity'];
}

export const schemas: PublicObjectSchemaType[] = [
  // This is the schema for the Contact object type
  {
    archived: false,
    associations: [
      {
        createdAt: null,
        fromObjectTypeId: '0-1',
        id: '388',
        name: 'CONTACT_TO_COMMERCE_PAYMENT',
        toObjectTypeId: '0-101',
        updatedAt: null,
      },
    ],
    createdAt: '1970-01-01T00:00:00.000Z',
    id: '1',
    labels: {
      singular: 'Contact',
      plural: 'contacts',
    },
    name: 'CONTACT',
    objectTypeId: '0-1',
    primaryDisplayProperty: 'firstname',
    properties: [
      {
        calculated: false,
        createdAt: '2020-06-30T15:57:37.277Z',
        description: "Contact's street address, including apartment or unit number.",
        displayOrder: 6,
        externalOptions: false,
        fieldType: 'text',
        formField: true,
        groupName: 'contactinformation',
        hasUniqueValue: false,
        hidden: false,
        hubspotDefined: true,
        label: 'Street Address',
        modificationMetadata: {
          archivable: true,
          readOnlyDefinition: true,
          readOnlyValue: false,
        },

        name: 'address',
        options: [],
        type: 'string',
        updatedAt: '2022-05-27T20:32:53.554Z',
      },
    ],
    requiredProperties: [],
    searchableProperties: [
      'firstname',
      'hs_searchable_calculated_international_phone_number',
      'lastname',
      'hs_marketable_until_renewal',
      'hs_marketable_status',
      'hs_additional_emails',
      'phone',
      'mobilephone',
      'hs_searchable_calculated_phone_number',
      'hs_searchable_calculated_mobile_number',
      'hs_searchable_calculated_international_mobile_number',
      'company',
      'fax',
      'email',
    ],
    secondaryDisplayProperties: ['lastname', 'email', 'phone'],
    updatedAt: '2024-06-21T14:55:47.738Z',
  },

  // This is the schema for the Company object type
  {
    archived: false,
    associations: [
      {
        createdAt: null,
        fromObjectTypeId: '0-1',
        id: '388',
        name: 'CONTACT_TO_COMMERCE_PAYMENT',
        toObjectTypeId: '0-101',
        updatedAt: null,
      },
    ],
    createdAt: '1970-01-01T00:00:00.000Z',
    fullyQualifiedName: 'COMPANY',
    id: '2',
    labels: {
      singular: 'Company',
      plural: 'companies',
    },
    name: 'COMPANY',
    objectTypeId: '0-2',
    primaryDisplayProperty: 'name',
    properties: [
      {
        calculated: false,
        createdAt: '2020-06-30T15:57:37.277Z',
        description: 'The company name.',
        displayOrder: 1,
        externalOptions: false,
        fieldType: 'text',
        formField: true,
        groupName: 'contactinformation',
        hasUniqueValue: false,
        hidden: false,
        hubspotDefined: true,
        label: 'Name',
        modificationMetadata: {
          archivable: true,
          readOnlyDefinition: true,
          readOnlyValue: false,
        },
        name: 'name',
        options: [],
        type: 'string',
        updatedAt: '2022-05-27T20:32:53.554Z',
      },
    ],
    requiredProperties: [],
    searchableProperties: ['website', 'phone', 'domain', 'name'],
    secondaryDisplayProperties: ['phone', 'domain'],
    updatedAt: '2024-06-21T14:55:47',
  },

  // This is the schema for the Deal object type
  {
    archived: false,
    associations: [
      {
        createdAt: null,
        fromObjectTypeId: '0-1',
        id: '388',
        name: 'CONTACT_TO_COMMERCE_PAYMENT',
        toObjectTypeId: '0-101',
        updatedAt: null,
      },
    ],
    createdAt: '1970-01-01T00:00:00.000Z',
    fullyQualifiedName: 'DEAL',
    id: '3',
    labels: {
      singular: 'Deal',
      plural: 'deals',
    },
    name: 'DEAL',
    objectTypeId: '0-3',
    primaryDisplayProperty: 'dealname',
    properties: [
      {
        calculated: false,
        createdAt: '2020-06-30T15:57:37.277Z',
        description: 'The name of the deal.',
        displayOrder: 1,
        externalOptions: false,
        fieldType: 'text',
        formField: true,
        groupName: 'dealinformation',
        hasUniqueValue: false,
        hidden: false,
        hubspotDefined: true,
        label: 'Deal Name',
        modificationMetadata: {
          archivable: true,
          readOnlyDefinition: true,
          readOnlyValue: false,
        },
        name: 'dealname',
        options: [],
        type: 'string',
        updatedAt: '2022-05-27T20:32:53.554Z',
      },
    ],
    requiredProperties: [],
    searchableProperties: ['pipeline', 'dealname', 'dealstage', 'description', 'dealtype'],
    secondaryDisplayProperties: ['dealstage', 'dealtype'],
    updatedAt: '2024-06-21T14:55:47.738Z',
  },

  // This is the schema for the Ticket object type
  {
    archived: false,
    associations: [
      {
        createdAt: null,
        fromObjectTypeId: '0-1',
        id: '388',
        name: 'CONTACT_TO_COMMERCE_PAYMENT',
        toObjectTypeId: '0-101',
        updatedAt: null,
      },
    ],
    createdAt: '1970-01-01T00:00:00.000Z',
    fullyQualifiedName: 'TICKET',
    id: '5',
    labels: {
      singular: 'Ticket',
      plural: 'tickets',
    },
    name: 'TICKET',
    objectTypeId: '0-5',
    primaryDisplayProperty: 'subject',
    properties: [
      {
        calculated: false,
        createdAt: '2020-06-30T15:57:37.277Z',
        description: 'The subject of the ticket.',
        displayOrder: 1,
        externalOptions: false,
        fieldType: 'text',
        formField: true,
        groupName: 'ticketinformation',
        hasUniqueValue: false,
        hidden: false,
        hubspotDefined: true,
        label: 'Subject',
        modificationMetadata: {
          archivable: true,
          readOnlyDefinition: true,
          readOnlyValue: false,
        },
        name: 'subject',
        options: [],
        type: 'string',
        updatedAt: '2022-05-27T20:32:53.554Z',
      },
    ],
    requiredProperties: ['hs_pipeline_stage'],
    searchableProperties: [
      'hs_ticket_category',
      'hs_ticket_id',
      'hs_all_associated_contact_firstnames',
      'hs_all_associated_contact_mobilephones',
      'hs_all_associated_contact_phones',
      'subject',
      'hs_all_associated_contact_companies',
      'hs_pipeline_stage',
      'hs_all_associated_contact_lastnames',
      'content',
      'hs_all_associated_contact_emails',
    ],
    secondaryDisplayProperties: ['createdate', 'closed_date', 'hubspot_owner_id', 'hs_pipeline_stage'],
    updatedAt: '2024-06-21T14:55:47.738Z',
  },

  {
    archived: false,
    associations: [
      {
        createdAt: null,
        fromObjectTypeId: '0-1',
        id: '388',
        name: 'CONTACT_TO_COMMERCE_PAYMENT',
        toObjectTypeId: '0-101',
        updatedAt: null,
      },
    ],
    createdAt: '1970-01-01T00:00:00.000Z',
    fullyQualifiedName: 'LINE_ITEM',
    id: '8',
    labels: {
      singular: 'Line Item',
      plural: 'Line items',
    },
    name: 'LINE_ITEM',
    objectTypeId: '0-8',
    primaryDisplayProperty: 'name',
    properties: [
      {
        calculated: false,
        createdAt: '2020-06-30T15:57:37.277Z',
        description: 'The name of the line item.',
        displayOrder: 1,
        externalOptions: false,
        fieldType: 'text',
        formField: true,
        groupName: 'lineiteminformation',
        hasUniqueValue: false,
        hidden: false,
        hubspotDefined: true,
        label: 'Name',
        modificationMetadata: {
          archivable: true,
          readOnlyDefinition: true,
          readOnlyValue: false,
        },
        name: 'name',
        options: [],
        type: 'string',
        updatedAt: '2022-05-27T20:32:53.554Z',
      },
    ],
    requiredProperties: [],
    searchableProperties: [],
    secondaryDisplayProperties: ['price', 'quantity'],
    updatedAt: '2024-06-21T14:55:47',
  },

  // custom object type Product
  {
    archived: false,
    associations: [
      {
        createdAt: null,
        fromObjectTypeId: '2-1161156',
        id: '388',
        name: 'PRODUCT_TO_COMMERCE_PAYMENT',
        toObjectTypeId: '0-101',
        updatedAt: null,
      },
    ],
    createdAt: '1970-01-01T00:00:00.000Z',
    fullyQualifiedName: 'PRODUCT',
    id: '1161156',
    labels: {
      singular: 'Product',
      plural: 'products',
    },
    name: 'PRODUCT',
    objectTypeId: '2-1161156',
    primaryDisplayProperty: 'name',
    properties: [
      {
        calculated: false,
        createdAt: '2020-06-30T15:57:37.277Z',
        description: 'The name of the product.',
        displayOrder: 1,
        externalOptions: false,
        fieldType: 'text',
        formField: true,
        groupName: 'productinformation',
        hasUniqueValue: false,
        hidden: false,
        hubspotDefined: true,
        label: 'Name',
        modificationMetadata: {
          archivable: true,
          readOnlyDefinition: true,
          readOnlyValue: false,
        },
        name: 'name',
        options: [],
        type: 'string',
        updatedAt: '2022-05-27T20:32:53.554Z',
      },
    ],
    requiredProperties: [],
    searchableProperties: ['sku', 'name'],
    secondaryDisplayProperties: ['price', 'inStock'],
    updatedAt: '2024-06-21T14:55:47',
  },
];
