import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../../icons/star.svg";
import { ReactComponent as FavotiresIcon } from "../../icons/heart.svg";
import { ReactComponent as FavotiresIconActive } from "../../icons/heart-red.svg";

export const CatalogCard = ({ item }) => {
    console.log(item);
    return (
        <article className="catalog-card">
            <img src="" alt="" />
            <div>
                <div className="catalog-card-header">
                    <div>
                        <h3 className="catalog-card-name">{item.name}</h3>
                        <span>
                            <Star/>
                            {' '}
                            {item.rating} 
                            {item.reviews.length && <Link to={`/${item._id}/reviews`}>({item.reviews.length} Reviews)</Link>}
                        </span>
                    </div>
                    <p className="catalog-card-price">€{item.price}</p>
                    <button aria-label="Favorites" className="catalog-card-fav">
                        <FavotiresIcon />
                    </button>
                </div>
            </div>
        </article>
    )
}; 
