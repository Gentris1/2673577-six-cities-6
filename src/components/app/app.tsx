import MainScreen from '../../pages/main-screen/main-screen.tsx';

type AppScreenProps = {
  rentalOffersCount: number;
}

function App(props: AppScreenProps) {
  return (
    <MainScreen rentalOffersCount={props.rentalOffersCount}/>
  );
}

export default App;
