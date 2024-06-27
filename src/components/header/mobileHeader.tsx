import { useSettings } from '../../contexts/settings';
import { communColors } from '../../contexts/theme/theme';
import ButtonTheme from './buttonTheme';

const MobileHeader = () => {
  const {
    selectedCompanie,
    setSelectedCompanie,
    setSelectedNode,
  } = useSettings();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: communColors.extra1,       
        padding: '20px'
      }}
    >
      <button
        onClick={() => {
          setSelectedCompanie(null)
          setSelectedNode(null)
        }}
        style={{
          background: 'none',
          border:'none',
          cursor: 'pointer'
        }}
      >
        <img src='./arrow-back-dark.svg' alt='arrow back' />
      </button>

      <span style={{ color: 'white' }}>{selectedCompanie?.company.name}</span>

      <ButtonTheme />
    </div>
  );
};

export default MobileHeader;
