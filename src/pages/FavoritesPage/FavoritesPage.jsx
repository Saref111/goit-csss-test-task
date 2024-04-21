import { CatalogList } from "components/CatalogList/CatalogList";
import { Header } from "components/Header/Header";
import { useSelector } from "react-redux";
import { selectFavorites } from "store/favoritesSelectors";
import { DetailsModal } from "components/DetailsModal/DetailsModal";

export const FavoritesPage = () => {
    const favorites = useSelector(selectFavorites);
    const modalItem = useSelector((state) => state.modal.item);
    console.log(modalItem);
    return (
        <>
            <Header />
            <section className="section">
                <div className="section__wrapper">
                    <h1 className="visually-hidden">Favorites</h1>
                    <CatalogList items={favorites} />
                </div>
            </section>
            <DetailsModal item={modalItem} />
        </>
    )
};
