import { useEffect, useState } from "react";
import { useSettings } from "../../contexts/settings";
import { useTheme } from "../../contexts/theme";
import { ButtonLabel, buttons } from "./mocks";
import { communColors } from "../../contexts/theme/theme";

const SubHeader = () => {
  const { isSmDown } = useTheme();
  const { selectedCompanie } = useSettings();
  const [selectedButton, setSelectedButton] = useState<ButtonLabel>(null);

  const handleSelectedButton = (button: ButtonLabel) => {
    setSelectedButton((prev) => prev === button ? null : button);
  };

  useEffect(() => {
    setSelectedButton(null);
  }, [selectedCompanie?.company.id]);
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >

        <div
          style={{
            display: isSmDown ? 'none' : 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <span
            style={{
              fontWeight: 600,
              fontSize: '20px',
            }}
          >
            Ativos
          </span>

          <span
            style={{
              fontWeight: 400,
              fontSize: '14px',
              marginTop: '5px'
            }}
          >
            / {selectedCompanie?.company.name}
          </span>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          {
            buttons.map(({ label, title, icon }) => (
              <button
                key={label}
                onClick={() => handleSelectedButton(label)}
                style={{
                  textTransform: 'none',
                  fontFamily: 'Inter',
                  background: selectedButton === label ? communColors.extra3 : 'white',
                  color: selectedButton === label ? 'white' : communColors.extra4,
                  cursor: 'pointer',
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0px 10px'
                }}
              >
                <img
                  src={`${icon}-${selectedButton === label ? 'white' : 'dark'}.svg`}
                  alt={title}
                  style={{
                    marginRight: '5px',
                    color: selectedButton === label ? 'white' : communColors.extra4,
                  }}
                />
                {title}
              </button>
            ))
          }
        </div>

      </div>

    </div>
  );
};

export default SubHeader;
