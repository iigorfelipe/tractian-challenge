import { useSettings } from '../../contexts/settings';
import SubHeader from '../../components/subHeader';
import Main from '../../components/main';
import Header from '../../components/header';
import { useTheme } from '../../contexts/theme';
import HomeLogo from '../../components/homeLogo';


const Home = () => {
  const { selectedCompanie, selectedNode } = useSettings();
  const { isSmDown } = useTheme();

  return (
    <div>
      <Header />
      {
        selectedCompanie?.company.id ? (
          <div
            style={{
              padding: '10px',
              margin: '10px',
            }}
          >
            {isSmDown && selectedNode?.componentIcon ? null : <SubHeader />}
            <Main />
          </div>
        ) : <HomeLogo />
      }
    </div>
  );
};

export default Home;
