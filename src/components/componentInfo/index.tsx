import { useTheme } from '../../contexts/theme';
import BottomInfos from './bottomInfos';
import InfoHeader from './header';
import TopInfos from './topInfos';


const ComponentInfo = () => {
  const { isSmDown, selectedTheme } = useTheme();
  
  return (
    <div
      style={{
        border: `1px solid ${selectedTheme.colors.border}`,
        borderRadius: '4px',
        minWidth: isSmDown ? '100%' : '50%',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '799px',
        }}
      >
        <InfoHeader />

        <div
          style={{
            display:'flex',
            flexDirection: 'column',
            padding: '30px',          
          }}
        >
          <TopInfos />
          <BottomInfos />
        </div>
      </div>
    </div>
  );
};

export default ComponentInfo;
