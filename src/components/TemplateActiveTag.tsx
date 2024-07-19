import { Template } from '../app/api/types';
import { Tag } from 'primereact/tag';

const TemplateActiveTag = ({ template }: { template: Template }) => {
  const { isActive } = template;

  return (
    <Tag
      severity={isActive ? 'success' : 'danger'}
      style={{ alignSelf: 'start' }}
      value={isActive ? 'Active' : 'Inactive'}
    />
  );
};

export default TemplateActiveTag;
