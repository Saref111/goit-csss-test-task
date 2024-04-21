import React from 'react';
import { filtercheckboxIconsMap } from '../../const';
import { selectType } from 'store/filterSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { setType } from 'store/filtersSlice';

export const FilterRadio = ({ id, name }) => {
    const dispatch = useDispatch();
    const checked = useSelector(selectType) === id;

    const onChange = () => {
        dispatch(setType(id));
    }
    return (
        <label className={`filter-item ${checked ? 'filter-item--checked' : ''}`} htmlFor={id}>
            <input onChange={onChange} type="radio" id={id} name="type" checked={checked}/>
            {filtercheckboxIconsMap[id]}
            {name}
        </label>
    )
}
