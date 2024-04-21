import { Header } from "components/Header/Header";
import React, { useEffect, useState } from "react";
import { getCampers } from "services/api";
import { CatalogList } from "components/CatalogList/CatalogList";
import "./CatalogPage.css";
import { Filters } from "components/Filters/Filters";


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
