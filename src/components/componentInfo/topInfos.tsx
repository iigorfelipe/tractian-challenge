import { useSettings } from '../../contexts/settings';
import { useTheme } from '../../contexts/theme';
import { communColors } from '../../contexts/theme/theme';
import ImageInfo from './imageInfo';
import { nodeInfos } from './mocks';


const TopInfos = () => {
  const { selectedNode } = useSettings();
  const { isSmDown, selectedTheme } = useTheme();
  
  const infos = nodeInfos(selectedNode).topLeft;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isSmDown ? 'column' : 'row',
        gap: '30px',
        alignItems: isSmDown ? 'center' : ''
      }}
    >
      <ImageInfo />

      <div
        style={{
          display: 'flex',
          flexDirection: isSmDown ? 'row' : 'column',
          width: isSmDown ? '100%' : '50%',
          justifyContent: 'space-between'
        }}
      >
        {
          infos.map(({ title, value }, index) => (
            <div
              key={title}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: isSmDown ? 'center' : 'start',
                flexDirection: 'column',
                gap: '8px',
                height: '50%',
                width: '100%',            
                borderBottom: !isSmDown && index === 0 ? `1px solid ${selectedTheme.colors.border}` : 'none',                    
              }}
            >
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '16px',
                  textAlign: isSmDown ? 'center' : 'start',
                }}
              >
                {title}
              </span>

              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  textAlign: isSmDown ? 'center' : 'start',
                }}
                >
                {
                  index === 1 && (
                    <span
                      style={{
                        background: communColors.extra3,
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#fff',
                        fontSize: '14px',
                        textAlign: 'center'
                      }}
                    >
                      {value?.[0]}
                    </span>
                    
                  )
                }
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
    </div>  
  );
};

export default TopInfos;
