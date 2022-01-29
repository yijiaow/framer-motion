import LandingPage from './pages/landing';
import PersonnelPage from './pages/personnel';
import LoginPage from './pages/login';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  // return <PersonnelPage />
  // return <LandingPage />;
  return <LoginPage />;
};

export default App;
