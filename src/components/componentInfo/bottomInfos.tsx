import { useSettings } from '../../contexts/settings';
import { useTheme } from '../../contexts/theme';
import { nodeInfos } from './mocks';


const BottomInfos = () => {
  const { selectedNode } = useSettings();
  const { isSmDown, selectedTheme } = useTheme();
  
  const infos = nodeInfos(selectedNode).bottom;

  return (
    <div
      style={{
        display: 'flex',
        height: '120px',
        borderTop: `1px solid ${selectedTheme.colors.border}`,
        marginTop: '30px'
      }}
    >
      {
        infos.map(({ title, icon, value }) => (
          <div
            key={title}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isSmDown ? 'center' : 'start',
              justifyContent: 'center',
              width: '50%',
              fontWeight: 600,
              fontSize: '16px',
              gap: '8px'
            }}
          >
            <span
              style={{
                fontWeight: 600,
                fontSize: '16px',
              }}
            >
              {title}
            </span>
        
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <img src={icon} alt={title} />
              <span
                style={{
                  fontWeight: 400,
                  fontSize: '16px',
                  color: '#88929C'
                }}
              >
                {value}
              </span>
            </div>
  
          </div>
        ))
      }

    </div>
  );
};

export default BottomInfos;
