import MainScreen from '../../pages/MainScreen/MainScreen.tsx';

type AppScreenProps = {
  rentalOffersCount: number;
}

function App({rentalOffersCount}: AppScreenProps) {
  return (
    <MainScreen rentalOffersCount={rentalOffersCount}/>
  );
}

export default App;
