import { ReactComponent as Star } from "../../icons/star.svg";

export const CatalogCard = ({ item }) => {
    return (
        <article className="catalog-card">
            <img src="" alt="" />
            <div>
                <div className="catalog-card-header">
                    <div>
                        <h3 className="catalog-card-name">{item.name}</h3>
                        <span>
                            <Star/>
                        </span>
                    </div>
                    <p className="catalog-card-price">{item.price}</p>
                </div>
            </div>
        </article>
    )
}; 
