import React from 'react';
import { detailsNamesMap, detailsIconsMap } from "../../const";
import './CategoriesList.css';

export const CategoriesList = ({ itemsObject, minimize }) => {
    return (
        <ul className={`categories ${minimize ? 'categories--short' : ''}`}>
            {Object.entries(itemsObject)?.map(([name, feature]) => feature && (
                <li key={name}>
                    {detailsIconsMap[name]}
                    <span>{feature !== 1 && feature} {detailsNamesMap[name]}</span>
                </li>
            )).filter(Boolean)}
        </ul>
    )
}
