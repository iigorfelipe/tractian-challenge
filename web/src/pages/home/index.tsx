import { useSettings } from '../../contexts/settings';
import SubHeader from '../../components/subHeader';
import Main from '../../components/main';
import Header from '../../components/header';


const Home = () => {
  const { selectedCompanie } = useSettings();

  return (
    <div>
      <Header />
      {
        selectedCompanie?.company.id && (
          <div
            style={{
              padding: '10px',
              margin: '10px',
            }}
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
