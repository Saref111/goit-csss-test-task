import {ReactComponent as GoldStarIcon} from '../../icons/gold-star.svg';
import {ReactComponent as GreyStarIcon} from '../../icons/grey-star.svg';

const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(i <= rating ? <GoldStarIcon key={i}/> : <GreyStarIcon key={i}/>);
    }
    return stars;
}

export const Reviews = ({ reviews }) => {
    return (
        <ul className="reviews" style={{width: '50%'}}>
            {reviews.map((review, index) => (
                <li key={index} className="reviews__item">
                    <div className="reviews__header">
                        <span className="reviews__author">{review.reviewer_name}</span>
                        {' '}
                        {getStars(review.reviewer_rating)}
                    </div>
                    <p className="reviews__text">{review.comment}</p>
                </li>
            ))}
        </ul>
    )
}
