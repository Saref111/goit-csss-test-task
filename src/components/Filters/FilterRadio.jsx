import React from 'react';
import { filtercheckboxIconsMap } from '../../const';

export const FilterRadio = ({ id, name, checked, onChange }) => {
    return (
        <label className={`filter-item ${checked ? 'filter-item--checked' : ''}`} htmlFor={id}>
            <input onChange={onChange} type="radio" id={id} name="type" checked={checked}/>
            {filtercheckboxIconsMap[id]}
            {name}
        </label>
    )
}
