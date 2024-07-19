import { Image } from 'primereact/image';

interface Props {
  className?: string;
  onReload?: () => void;
}
const TemplateListEmptyState = ({ className = '', onReload }: Props) => {
  return (
    <div className={className}>
      <div
        className='text-center flex flex-col items-center justify-center gap-3 text-slate-600'
        style={{ maxWidth: '400px' }}
      >
        <h3 className='text-2xl'>Couldn't find any templates</h3>
        <Image
          src='./images/no-file.svg'
          pt={{ image: { style: { minWidth: '150px', width: '100%', maxWidth: '200px' } } }}
        />
        <div>
          <p>It looks like you haven't created any templates yet.</p>
          <p>
            Head over to Documint and create your first template then click{' '}
            <button className='text-primary-600' onClick={() => onReload?.()}>
              Reload
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateListEmptyState;
