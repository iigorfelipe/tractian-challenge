import { useSettings } from '../../contexts/settings';
import { useTheme } from '../../contexts/theme';

const InfoHeader = () => {
  const { selectedNode, setSelectedNode } = useSettings();
  const { isSmDown, theme, selectedTheme } = useTheme();
  
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '50px',
        padding: '0px 20px',
        borderBottom: `1px solid ${selectedTheme.colors.border}`,
        fontWeight: 600,
        fontSize: '18px',
        gap: '10px'
      }}
    >

      {
        isSmDown && (
          <button
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '5px 15px'            
            }}
            onClick={() => setSelectedNode(null)}
          >
            <img src={`./arrow-back-${theme}.svg`} alt='arrow back' />
          </button>
        )
      }

      {selectedNode?.label}
      {
        selectedNode?.icon && (
          <img src={selectedNode?.componentIcon} alt="" />
        )
      }
    </div>
  );
};

export default InfoHeader;
