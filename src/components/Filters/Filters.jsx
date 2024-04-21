import { ActionButton } from "components/ActionButton/ActionButton";
import { FilterCheckbox } from "./FilterCheckbox";
import './Filters.css';

export const Filters = () => {
    return (
        <form className="filters-form">
            <fieldset>
                <legend>Location</legend>
                <input type="text" placeholder="City" name="location" className="filters-form__text-input filters-form__text-input--location"/>
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
                    <FilterCheckbox id="vt1" name="Van" />
                    <FilterCheckbox id="vt2" name="Fully Integrated" />
                    <FilterCheckbox id="vt3" name="Alcove" />
                </div>
            </fieldset>
            <ActionButton type="submit">Search</ActionButton>
        </form> 
    )
};
