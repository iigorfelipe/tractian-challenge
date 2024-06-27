import { useTheme } from '../../contexts/theme';

const Logo = () => {
  const { isSmDown } = useTheme();

  return (
    <div style={{ marginTop: isSmDown ? '18px' : '0px' }}>
      <img src='./logo.svg' alt='logo' />
    </div>
  );
};

export default Logo;
