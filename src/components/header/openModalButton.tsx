import { useTheme } from '../../contexts/theme';

type OpenModalButtonProps = {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
};

const OpenModalButton = ({ isOpen, setIsOpen }: OpenModalButtonProps) => {
  const { isSmDown } = useTheme();

  const openModal = () => setIsOpen(true);
  
  return (
    <button
      onClick={openModal}
      style={{        
        display: isOpen ? 'none' : 'flex',
        background: isSmDown ? '#2188FF' : 'none',
        border: 'none',
        cursor: 'pointer',
        marginTop: '1px',
        padding: isSmDown ? '10px 10px' : '0px',
        borderRadius: isSmDown ? '20px' : '0px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img src='./add.svg' alt='add icon' />
    </button>
  );
};

export default OpenModalButton;
