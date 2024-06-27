import { useSettings } from '../../contexts/settings';
import { useTheme } from '../../contexts/theme';
import { communColors } from '../../contexts/theme/theme';

type Button = {
  isOpen: boolean;
  id: string;
  name: string;
};

const Button = ({ isOpen, id, name }: Button) => {
  const { isSmDown, isMdDown } = useTheme();
  const { handleSelectedCompanie, selectedCompanie, pending } = useSettings();

  return (
    <button              
      key={id}
      type='button'
      onClick={() => handleSelectedCompanie(id)}
      disabled={pending}
      style={{
        display: isOpen && isMdDown && !isSmDown ? 'none' : 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: isSmDown ? '100%' : '130px',
        padding: '0 1rem',
        height: isSmDown ? '50px' : '30px',
        textTransform: 'none',
        fontFamily: 'Inter',
        borderRadius: '4px',
        border: 'none',
        background: selectedCompanie?.company.id === id ? communColors.extra3 : communColors.extra2,
        color: 'white',
        cursor: pending ? 'wait' : 'pointer',
      }}
    >
      <img
        src='./cubes-light.svg'
        alt="cubes-icon"
        style={{
          marginRight: '5px',
          color: selectedCompanie?.company.id === id ? 'white' : communColors.extra4,
        }}
      />
      {name}
    </button>
  );
};

export default Button;
