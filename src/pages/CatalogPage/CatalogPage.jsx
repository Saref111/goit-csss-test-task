import { Header } from "components/Header/Header"

export const CatalogPage = () => {
    return (
        <>
            <Header />
            <section className="catalog-container">
                <aside>
                    FiltersForm
                </aside>
                <div>
                    CatalogList
                </div>
            </section>
        </>
    )
}
