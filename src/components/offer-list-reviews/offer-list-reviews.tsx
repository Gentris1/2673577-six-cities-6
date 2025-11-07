import {OfferReview} from '../offer-review/offer-review.tsx';
import {Review, Reviews} from '../../types/review.ts';

type ListReviewProps = {
  reviews: Reviews;
}

export function OfferListReviews({reviews}: ListReviewProps) {
  return (
    <ul className="reviews__list">
      {reviews.map((review: Review) => (<OfferReview key={review.id} review={review}/>))}
    </ul>
  );
}
