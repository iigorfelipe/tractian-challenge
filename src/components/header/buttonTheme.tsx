import { useSettings } from '../../contexts/settings';
import { useTheme } from '../../contexts/theme';


const ButtonTheme = () => {
  const { toggleTheme, isSmDown } = useTheme();
  const { selectedCompanie } = useSettings();

  return (
    <button
      onClick={toggleTheme}
      style={{
        background: isSmDown && !selectedCompanie?.company.id ? '#2188FF' : 'none',
        border:'none',
        cursor: 'pointer',
        padding: isSmDown && !selectedCompanie?.company.id ? '10px 10px' : '0px',
        borderRadius: isSmDown && !selectedCompanie?.company.id ? '20px' : '0px',
        width: isSmDown && !selectedCompanie?.company.id ? '100%' : '',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img src='./theme.svg' alt='theme icon' />
    </button>
  );
};

export default ButtonTheme;

  