import { Header } from "components/Header/Header";
import React, { useEffect, useState } from "react";
import { getCampers } from "services/api";
import { CatalogList } from "components/CatalogList/CatalogList";


export const CatalogPage = () => {
    const [campers, setCampers] = useState([]);
    useEffect(() => {
        const fetchCampers = async () => {
            try {
                const campers = await getCampers();
                setCampers(campers);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCampers();
    }, []);
    return (
        <>
            <Header />
            <section className="catalog-container">
                <aside>
                    FiltersForm
                </aside>
                <div>
                    <CatalogList items={campers} />
                </div>
            </section>
        </>
    )
}
