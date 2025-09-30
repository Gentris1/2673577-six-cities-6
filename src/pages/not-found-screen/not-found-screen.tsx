import {Link} from 'react-router-dom';

function NotFoundScreen() {
  return (
    <>
      <p>404 Not Found</p>
      <Link to="/">Главная</Link>
    </>
  );
}

export default NotFoundScreen;
