import React from 'react';
import { Badge } from 'primereact/badge';
import * as dateFns from 'date-fns';

import type { TemplateType } from '../../../mockups/types';
import { useNavigate } from 'react-router-dom';

interface Props {
  template: TemplateType;
}

const GridItem = ({ template }: Props) => {
  const navigate = useNavigate();

  const { isActive } = template;
  return (
    <div
      onClick={() => navigate('/dashboard')}
      className='border border-slate-200 flex flex-col justify-stretch  surface-card rounded-lg cursor-pointer bg-white overflow-hidden hover:shadow-md'
    >
      <div className='flex flex-col items-center gap-3 p-2 bg-slate-300 grow-1 basis-full pb-0'>
        <div
          className='w-full rounded-sm'
          style={{
            backgroundImage: `url(${template?.thumbnail?.url})`,
            height: '170px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
      <div className='flex items-start justify-start p-3 basis-full z-10 border-t border-t-slate-200'>
        <Badge
          className='active-badge mt-1'
          severity={isActive ? 'success' : 'danger'}
          style={{ alignSelf: 'start', transform: 'scale(.35)' }}
          data-pr-tooltip={isActive ? 'Active' : 'Inactive'}
        />
        <div className='text-lg font-bold'>
          <div className='mb-2'>{template.name}</div>
          <div className='text-sm text-neutral-400'>
            {template?.updatedAt && (
              <>Last updated {dateFns.formatDistance(new Date(template?.updatedAt), new Date(), { addSuffix: true })}</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
