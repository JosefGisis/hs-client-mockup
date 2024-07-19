import { useMemo, useState } from 'react';

import { DataView, DataViewLayoutOptions, DataViewPassThroughOptions } from 'primereact/dataview';

import SearchButtonInput from '../../components/SearchButtonInput';
import GridItem from './components/GridItem';
import ListItem from './components/ListItem';
import { Tooltip } from 'primereact/tooltip';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import TemplateListEmptyState from './components/TemplateListEmptyState';
import { useNavigate } from 'react-router-dom';

import { templates } from '../../mockups/templates';
import type { TemplateType } from '../../mockups/types';

type ActiveOption = 'all' | 'active' | 'inactive';

const activeOptions: { label: string; value: ActiveOption }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

export default function Templates() {
  const [activeFilter, setActiveFilter] = useState<ActiveOption>('all');

  const navigate = useNavigate();

  const templatesList: TemplateType[] = templates;
  const [layout, setLayout] = useState<any>('grid');

  const hasSearchResults = templatesList.length > 0;

  const ptOptions: DataViewPassThroughOptions = {
    grid: {},
    header: { style: { padding: '.5em 1em' } },
    emptyMessage: {
      className: 'p-10 text-center w-full items-center flex justify-center',
      style: { minHeight: 'calc(100vh - 60px)' },
    },
    content: { style: { background: 'transparent' } },
    loadingOverlay: { style: { backgroundColor: 'rgba(255,255,255,.7)', zIndex: 100 } },
  };

  if (layout === 'grid')
    ptOptions.grid = {
      className: hasSearchResults ? 'grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 p-5' : '',
    };

  const listItem = (template: TemplateType) => <ListItem template={template} />;
  const gridItem = (template: TemplateType) => <GridItem template={template} />;
  const itemTemplate = layout === 'grid' ? gridItem : listItem;

  return (
    <div className='flex flex-col gap-4 h-screen'>
      {/* Record change controls */}
      <div className='flex items-center justify-between border border-slate-500 rounded-md p-2 shadow-lg'>
        <div>
          <p>Example Record</p>
          <p>This is an example record</p>
        </div>
        <p onClick={() => navigate('/records')} className='underline'>
          change
        </p>
      </div>

      {/* Templates List */}
      <div className='flex flex-col flex-1 border border-slate-500 rounded-md p-3'>
        {/* HEADER */}
        <div className='flex-initial grid grid-cols-3 py-2 px-1'>
          {/* LEFT */}
          <div className='flex justify-start items-center gap-3 '>
            <Dropdown
              options={activeOptions}
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className='p-inputtext-sm'
            />
            <SearchButtonInput onChange={() => console.log('')} />
          </div>

          {/* CENTER */}
          <div className='flex justify-center items-center'>
            <h4 className='text-2xl font-medium text-slate-600'>Select a Template</h4>
          </div>

          {/* RIGHT */}
          <div className='flex items-center justify-end gap-3'>
            <Button size='small' icon='pi pi-refresh' outlined severity='secondary' />
            <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
          </div>
        </div>

        {/* CONTENT */}
        <div className='flex-1 border bg-slate-50'>
          {templates?.length > 0 ? (
            <DataView
              value={templatesList}
              itemTemplate={itemTemplate}
              header={false}
              layout={layout}
              pt={ptOptions}
              className='h-full'
              emptyMessage="Couldn't find any templates"
              style={{ minHeight: '100%' }}
            />
          ) : (
            <div className='h-full flex justify-center items-center'>
              <TemplateListEmptyState />
            </div>
          )}
          <Tooltip target='.active-badge' />
        </div>
      </div>
    </div>
  );
}
