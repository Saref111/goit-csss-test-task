import React from 'react';
import { CatalogCard } from '../CatalogCard/CatalogCard';
import "./CatalogList.css";

export const CatalogList = ({ items }) => {
    return (
        <div className="catalog-list">
            <ul>
                {items.map((item) => (
                    <li key={item._id}><CatalogCard item={item} /></li>
                ))}
            </ul>
        </div>
    )
};
