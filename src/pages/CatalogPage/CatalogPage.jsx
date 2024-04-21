import { Header } from "components/Header/Header";
import React, { useEffect } from "react";
import { CatalogList } from "components/CatalogList/CatalogList";
import "./CatalogPage.css";
import { Filters } from "components/Filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "store/catalogThunks";
import { selectItems, selectLoading, selectError } from "store/catalogSelectors";


export const CatalogPage = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectItems);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchCatalog());
    }, [dispatch]);
    return (
        <>
            <Header />
            <section className="section">
                <div className="section__wrapper">
                    <aside className="section__aside">
                        <Filters />
                    </aside>
                    {error ? 'Something went wrong, please try again later.' 
                    : <div>
                        {loading ? 'Loading...' : <CatalogList items={campers} />}
                    </div>}
                </div>
            </section>
        </>
    )
}
