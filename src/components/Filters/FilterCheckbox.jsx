import React from 'react';
import { filtercheckboxIconsMap } from '../../const';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsDetailChecked } from '../../store/filterSelectors';
import { addDetail, removeDetail } from '../../store/filtersSlice';

export const FilterCheckbox = ({ id, name }) => {
    const dispatch = useDispatch();
    const checked = useSelector((state) => selectIsDetailChecked(state, id));

    const onChange = () => {
        if (checked) {
            dispatch(removeDetail(id));
        } else {
            dispatch(addDetail(id));
        }
    }
    return (
        <label className={`filter-item ${checked ? 'filter-item--checked' : ''}`} htmlFor={id}>
            <input onChange={onChange} type="checkbox" id={id} name={id} checked={checked}/>
            {filtercheckboxIconsMap[id]}
            {name}
        </label>
    )
}
