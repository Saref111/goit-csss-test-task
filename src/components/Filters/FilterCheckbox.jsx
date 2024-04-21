import React from 'react';
import { filtercheckboxIconsMap } from '../../const';

export const FilterCheckbox = ({ id, name, checked }) => {
    return (
        <label className="filter-item" htmlFor={id}>
            <input type="checkbox" id={id} name={id} checked={checked}/>
            {filtercheckboxIconsMap[id]}
            {name}
        </label>
    )
}
