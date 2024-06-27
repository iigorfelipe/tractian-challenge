import { useSettings } from '../../contexts/settings';
import Button from './button';

type VisibleCompnaniesProps = {
  isOpen: boolean;
  maxTags: number;
};

const VisibleCompnanies = ({ isOpen, maxTags }: VisibleCompnaniesProps) => {
  const { companies } = useSettings();

  const visibleCompanies = companies.slice(0, maxTags);

  return ( 
    visibleCompanies.map(({ id, name }) => {
      return (
       <Button
          key={id}
          id={id}
          name={name}
          isOpen={isOpen}
       />
      )
    })
  );
};

export default VisibleCompnanies;
