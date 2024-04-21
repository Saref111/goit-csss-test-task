import { Header } from "components/Header/Header";
import React, { useEffect } from "react";
import { CatalogList } from "components/CatalogList/CatalogList";
import "./CatalogPage.css";
import { Filters } from "components/Filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "store/catalogThunks";


export const CatalogPage = () => {
    const dispatch = useDispatch();
    const campers = useSelector((state) => state.catalog.items);
    console.log(campers);
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
                    <div>
                        <CatalogList items={campers} />
                    </div>
                </div>
            </section>
        </>
    )
}
