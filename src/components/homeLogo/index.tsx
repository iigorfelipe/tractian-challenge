import { useTheme } from '../../contexts/theme';
import { communColors } from '../../contexts/theme/theme';

const HomeLogo = () => {
  const { isSmDown } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',    
        gap: '30px',
        alignItems: 'center',
      }}
    >
      <img
        src='./header.jpg'
        alt='header'
        style={{
          display: isSmDown ? 'none' : 'flex',
          width: '100%',
          height: '100%'              
        }}
      />

      <a
        href="https://github.com/iigorfelipe/tractian-challenge"
        target="_blank"
        style={{
          textDecoration: 'none',
          color: communColors.extra3,
          fontSize: '18px',
          fontWeight: 600,
          marginTop: isSmDown ? '100%' : '0px'
        }}
      >
        <span>Github do projeto</span>
      </a>
    </div>
  );
};

export default HomeLogo;
