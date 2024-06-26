import { useSettings } from '../../contexts/settings';
import { communColors } from '../../contexts/theme/theme';


const ComponentInfo = () => {
  const { selectedNode } = useSettings();
  
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
          borderBottom: `1px solid ${communColors.extra5}`,
          fontWeight: 600,
          fontSize: '18px',
          gap: '10px'
        }}
      >
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
            gap: '30px',            
          }}
        >
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: `1px dashed ${communColors.extra5}`,
              width: '336px',
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
                fontSize: '16px'   
              }}
            >
              Adicionar imagem do Ativo
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '50%'
            }}
          >
            {
              infos.topLeft.map(({ title, value }, index) => (
                <div
                  key={title}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    flexDirection: 'column',
                    gap: '8px',
                    height: '50%',               
                    borderBottom: `1px solid ${communColors.extra5}`,
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
                      alignItems: 'center',
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
            borderTop: `1px solid ${communColors.extra5}`,
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
                  alignItems: 'start',
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
