import { useTheme } from '../../contexts/theme';
import { useSettings } from '../../contexts/settings';
import SubHeader from '../../components/subHeader';
import Main from '../../components/main';
import Header from '../../components/header';


const Home = () => {
  const { isSmDown } = useTheme();
  const { selectedCompanie } = useSettings();

  return (
    <div>
      <Header />
      {
        selectedCompanie?.id && (
          <div
            style={{ padding: isSmDown ? '0px' : '10px', }}
          >
            <SubHeader />
            <Main />
          </div>
        )
      }
    </div>
  );
};

export default Home;
