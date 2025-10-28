import {Offer} from '../../types/offer.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';


type CardImageSize = 'small' | 'large';
type CitiesCardProps = {
  offer: Offer;
  handleMouseOverOffer?: (offer: Offer | null) => void;
  className: string;
  sizeImg: CardImageSize;
}


const sizeMap: Record<CardImageSize, { width: string; height: string }> = {
  small: {width: '150', height: '110'},
  large: {width: '260', height: '200'},
};

function CitiesCard({offer, handleMouseOverOffer, className, sizeImg }: CitiesCardProps) {
  return (
    <article className={`${className}__card place-card`} onMouseOver={() => handleMouseOverOffer?.(offer)}
      onMouseLeave={() => handleMouseOverOffer?.(null)}
    >
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.imageSrc} width={sizeMap[sizeImg].width} height={sizeMap[sizeImg].height} alt="Place image"/>
        </a>
      </div>
      <div className={className === 'favorites' ? 'favorites__card-info place-card__info' : 'place-card__info'}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price.value}</b>
            <span className="place-card__price-text">&#47;&nbsp;{offer.price.text}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>
            {offer.name}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default CitiesCard;
