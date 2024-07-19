import React from 'react';
import { Button } from 'primereact/button';
import TemplateActiveTag from '../../../components/TemplateActiveTag';
import * as dateFns from 'date-fns';
import { useNavigate } from 'react-router-dom';

import type { TemplateType } from '../../../mockups/types';

interface Props {
  template: TemplateType;
}

const ListItem = ({ template }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className='flex gap-6 hover:bg-sky-100 cursor-pointer p-4'
      onClick={() => navigate('/dashboard')}
      key={template.id}
      style={{ minHeight: '150px' }}
    >
      <div className='flex flex-col justify-center' style={{ flex: '0 0 100px' }}>
        <img
          src={template?.thumbnail?.url}
          alt={template.name}
          className='shadow-md block rounded-md overflow-hidden'
        />
      </div>

      <div className='flex flex-col gap-y-3 justify-center flex-auto'>
        <h4 className='text-lg font-bold text-neutral-700'>{template?.name}</h4>
        <span className='text-sm text-neutral-400'>
          {template?.updatedAt && (
            <>Last updated {dateFns.formatDistance(new Date(template.updatedAt), new Date(), { addSuffix: true })}</>
          )}
        </span>
        <TemplateActiveTag template={template} />
      </div>
      <div className='flex flex-col justify-center'>
        <Button label='Select' onClick={() => navigate('/dashboard')} />
      </div>
    </div>
  );
};

export default ListItem;
