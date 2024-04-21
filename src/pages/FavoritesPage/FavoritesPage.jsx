import { CatalogList } from "components/CatalogList/CatalogList";
import { Header } from "components/Header/Header";
import { useSelector } from "react-redux";
import { selectFavorites } from "store/favoritesSelectors";

export const FavoritesPage = () => {
    const favorites = useSelector(selectFavorites);

    return (
        <>
            <Header />
            <section className="section">
                <div className="section__wrapper">
                    <CatalogList items={favorites} />
                </div>
            </section>
        </>
    )
};
