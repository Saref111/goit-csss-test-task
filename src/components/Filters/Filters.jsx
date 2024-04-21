import { FilterCheckbox } from "./FilterCheckbox";
import './Filters.css';

export const Filters = () => {
    return (
        <form className="filters-form">
            <fieldset>
                <legend>Location</legend>
                <input type="text" placeholder="City" />
            </fieldset>
            <fieldset>
                <legend>Filters</legend>
                <div>
                    <p>Vehicle equipment</p>
                    <FilterCheckbox id="ac" name="AC" />
                    <FilterCheckbox id="automatic" name="Automatic" />
                    <FilterCheckbox id="kitchen" name="Kitchen" />
                    <FilterCheckbox id="tv" name="TV" />
                    <FilterCheckbox id="shower" name="Shower/WC" />
                </div>
                <div>
                    <p>Vehicle type</p>
                    <FilterCheckbox id="vt1" name="Van" />
                    <FilterCheckbox id="vt2" name="Fully Integrated" />
                    <FilterCheckbox id="vt3" name="Alcove" />
                </div>
            </fieldset>
        </form> 
    )
};
