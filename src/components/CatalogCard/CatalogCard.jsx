import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../../icons/star.svg";
import { ReactComponent as FavotiresIcon } from "../../icons/heart.svg";
import { ReactComponent as FavotiresIconActive } from "../../icons/heart-red.svg";
import { ReactComponent as MapPinIcon } from "../../icons/map-pin.svg";
import "./CatalogCard.css";
import { ActionButton } from "components/ActionButton/ActionButton";

export const CatalogCard = ({ item }) => {
    console.log(item);
    return (
        <article className="catalog-card">
            <img src={item.gallery[0]} width={290} height={310} alt={item.description} />
            <div  className="catalog-card__info">
                <div className="catalog-card__header">
                    <div>
                        <h3 className="catalog-card__name">{item.name}</h3>
                        <span className="catalog-card__prop">
                            <Star/>
                            {' '}
                            {item.rating} 
                            {item.reviews.length && <Link to={`/${item._id}/reviews`}>({item.reviews.length} Reviews)</Link>}
                        </span>
                        <span className="catalog-card__prop"><MapPinIcon/>{item.location}</span>
                    </div>
                    <p className="catalog-card__price">€{item.price}</p>
                    <button aria-label="Favorites" className="catalog-card__fav">
                        <FavotiresIcon />
                    </button>
                </div>
                <p className="catalog-card__description">{item.description}</p>
                <ul className="catalog-card__categories">
                    {Object.entries(item.details)?.map(([name, feature]) => (
                        <li key={name}>{feature} {name}</li>
                    ))}
                </ul>
                <ActionButton>Book now</ActionButton>
            </div>
        </article>
    )
}; 
