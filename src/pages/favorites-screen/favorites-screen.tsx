import {ListFavoritesCards} from '../../components/list-favorites-cards/list-favorites-cards.tsx';
import {Offers} from '../../types/offer.ts';
import {Header} from '../../components/header/header.tsx';

type FavoritesScreenProps = {
  offers: Offers;
}

function FavoritesScreen({offers}: FavoritesScreenProps) {
  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>

            <ListFavoritesCards offers={[...offers].sort((a, b) => a.city.name.localeCompare(b.city.name))}/>

            <ul className="favorites__list">
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="markup/main.html">
          <img className="footer__logo" src="markup/img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
