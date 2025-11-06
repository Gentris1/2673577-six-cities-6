import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

function NotFoundScreen() {
  return (
    <>
      <p>404 Not Found</p>
      <Link to={AppRoute.Root}>Главная</Link>
    </>
  );
}

export default NotFoundScreen;
