import { ActionButton } from "components/ActionButton/ActionButton";
import { FilterCheckbox } from "./FilterCheckbox";
import { FilterRadio } from "./FilterRadio";
import './Filters.css';
import { useSelector, useDispatch } from "react-redux";
import { selectFilter } from "../../store/filterSelectors";
import { setLimit, setLocation, setPage } from "../../store/filtersSlice";
import { fetchCatalog } from "store/catalogThunks";
import { fetchCatalogSuccess } from "store/catalogSlice";

export const Filters = () => {
    const dispatch = useDispatch();
    const { location } = useSelector(selectFilter);

    const onLocationChange = (e) => {
        dispatch(setLocation(e.target.value));
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(setLimit(4));
        dispatch(setPage(1));
        dispatch(fetchCatalogSuccess([]))
        dispatch(fetchCatalog());
    }
    return (
        <form onSubmit={onFormSubmit} className="filters-form">
            <fieldset>
                <legend>Location</legend>
                <input
                    onChange={onLocationChange}
                    value={location}
                    type="text"
                    placeholder="City"
                    name="location"
                    className="filters-form__text-input filters-form__text-input--location"
                />
            </fieldset>
            <fieldset>
                <legend>Filters</legend>
                <div className="filters-form__container">
                    <p className="filters-form__title">Vehicle equipment</p>
                    <FilterCheckbox id="ac" name="AC" />
                    <FilterCheckbox id="automatic" name="Automatic" />
                    <FilterCheckbox id="kitchen" name="Kitchen" />
                    <FilterCheckbox id="tv" name="TV" />
                    <FilterCheckbox id="shower" name="Shower/WC" />
                </div>
                <div className="filters-form__container">
                    <p className="filters-form__title">Vehicle type</p>
                    <FilterRadio id="panelTruck" name="Van" />
                    <FilterRadio id="fullyIntegrated" name="Fully Integrated" />
                    <FilterRadio id="alcove" name="Alcove" />
                </div>
            </fieldset>
            <ActionButton type="submit">Search</ActionButton>
        </form>
    )
};
