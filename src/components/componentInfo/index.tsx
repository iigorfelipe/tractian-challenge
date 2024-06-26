import { useSettings } from '../../contexts/settings';
import { useTheme } from '../../contexts/theme';
import { communColors } from '../../contexts/theme/theme';


const ComponentInfo = () => {
  const { selectedNode, setSelectedNode } = useSettings();
  const { isSmDown, theme, selectedTheme } = useTheme();
  
  const infos = {
    topLeft: [
      {
        title: 'Tipo de Equipamento',
        value: selectedNode?.equipmentType
      },
      {
        title: 'Responsáveis',
        value: selectedNode?.responsible,
      },
    ],
    bottom: [
      {
        title: 'Sensor',
        icon: '/sign.svg',
        value: selectedNode?.sensor
      },
      {
        title: 'Receptor',
        icon: '/modem.svg',
        value: selectedNode?.receiver
      },
    ],
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxHeight: '799px',
      }}
    >
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
              <img src={`/arrow-back-${theme}.svg`} alt='arrow back' />
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

      <div
        style={{
          display:'flex',
          flexDirection: 'column',
          padding: '30px',          
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: isSmDown ? 'column' : 'row',
            gap: '30px',
            alignItems: isSmDown ? 'center' : ''
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: `1px dashed ${selectedTheme.colors.border}`,
              width: isSmDown ? '100%' : '336px',
              height: '226px',
              borderRadius: '4px',
              background: '#55a7ff34',
              cursor: 'pointer'
            }}
          >
            <img src='/add-image.svg' alt='add image' />
            <span
              style={{
                color: communColors.extra3,
                fontWeight: 600,
                fontSize: '16px',
                display: 'flex',
                textAlign: 'center'
              }}
            >
              Adicionar imagem do Ativo
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: isSmDown ? 'row' : 'column',
              width: isSmDown ? '100%' : '50%',
              justifyContent: 'space-between'
            }}
          >
            {
              infos.topLeft.map(({ title, value }, index) => (
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

        <div
          style={{
            display: 'flex',
            height: '120px',
            borderTop: `1px solid ${selectedTheme.colors.border}`,
            marginTop: '30px'
          }}
        >
          {
            infos.bottom.map(({ title, icon, value }) => (
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

      </div>
    </div>
  );
};

export default ComponentInfo;
