import React from 'react';
import { CatalogCard } from '../CatalogCard/CatalogCard';

export const CatalogList = ({ items }) => {
    return (
        <div className="catalog-list">
            {items.map((item) => (
                <CatalogCard key={item.id} item={item} />
            ))}
        </div>
    )
};
