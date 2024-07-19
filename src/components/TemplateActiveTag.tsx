import type { TemplateType } from '../mockups/types';
import { Tag } from 'primereact/tag';

const TemplateActiveTag = ({ template }: { template: TemplateType }) => {
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
