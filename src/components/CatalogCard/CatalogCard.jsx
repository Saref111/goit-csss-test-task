import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../../icons/star.svg";
import { ReactComponent as FavotiresIcon } from "../../icons/heart.svg";
import { ReactComponent as FavotiresIconActive } from "../../icons/heart-red.svg";
import "./CatalogCard.css";

export const CatalogCard = ({ item }) => {
    console.log(item);
    return (
        <article className="catalog-card">
            <img src={item.gallery[0]} width={290} height={310} alt={item.description} />
            <div  className="catalog-card__info">
                <div className="catalog-card__header">
                    <div>
                        <h3 className="catalog-card__name">{item.name}</h3>
                        <span className="catalog-card__rating">
                            <Star/>
                            {' '}
                            {item.rating} 
                            {item.reviews.length && <Link to={`/${item._id}/reviews`}>({item.reviews.length} Reviews)</Link>}
                        </span>
                    </div>
                    <p className="catalog-card__price">€{item.price}</p>
                    <button aria-label="Favorites" className="catalog-card__fav">
                        <FavotiresIcon />
                    </button>
                </div>
            </div>
        </article>
    )
}; 
