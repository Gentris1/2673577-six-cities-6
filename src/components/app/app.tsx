import MainScreen from '../../pages/main-screen/main-screen.tsx';

type AppScreenProps = {
  rentalOffersCount: number;
}

function App({rentalOffersCount}: AppScreenProps) {
  return (
    <MainScreen rentalOffersCount={rentalOffersCount}/>
  );
}

export default App;
