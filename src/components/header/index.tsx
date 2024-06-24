import { useSettings } from "../../contexts/settings";
import { useTheme } from "../../contexts/theme";
import { communColors } from "../../contexts/theme/theme";
import { buttons } from "./mocks";


const Header = () => {
  const { toggleTheme, isSmDown } = useTheme();
  const { handleSelectedAsset, selectedAsset, setSelectedAsset } = useSettings();

  const ButtonTheme = (
    <button
      onClick={toggleTheme}
      style={{
        background: 'none',
        border:'none',
        cursor: 'pointer'
      }}
    >
      <img src='/theme.svg' alt='theme icon' />
    </button>
  );

  return isSmDown && selectedAsset ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: communColors.extra1,       
        padding: '10px'
      }}
    >
      <button
        onClick={() => setSelectedAsset(null)}
        style={{
          background: 'none',
          border:'none',
          cursor: 'pointer'
        }}
      >
        <img src='/arrow-back.svg' alt='arrow back' />
      </button>

      <span style={{ color: 'white' }} >{selectedAsset}</span>

      {ButtonTheme}
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: isSmDown ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: communColors.extra1,
        height: '50px',
        padding: '0px 10px',
      }}
    >
      <div style={{ marginTop: isSmDown ? '18px' : '0px' }}>
        <img src='/logo.svg' alt='logo' />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexDirection: isSmDown ? 'column' : 'row',
          alignItems: 'center',
          marginTop: isSmDown ? '5vh' : '0px',
          width: isSmDown ? '100%' : '400PX',
          padding: `0px ${isSmDown ? '10px' : '0px'}`,
        }}
      >
        {
          buttons.map(({ label, title }) => (
            <button
              key={label}
              type='button'
              onClick={() => handleSelectedAsset(title)}
              style={{
                width: isSmDown ? '100%' : '130px',
                height: isSmDown ? '50px' : '30px',
                textTransform: 'none',
                fontFamily: 'Inter',
                borderRadius: '4px',
                border: 'none',
                background: selectedAsset === title ? communColors.extra3 : communColors.extra2,
                color: 'white',
                cursor: 'pointer'
              }}
            >
              <img
                src='/cubes-light.svg'
                alt="cubes-icon"
                style={{
                  marginRight: '5px',
                  color: selectedAsset === title ? 'white' : communColors.extra4,
                }}
              />
              {title}
            </button>
          ))
        }
      </div>

      {ButtonTheme}

    </div>
  );
};

export default Header;
