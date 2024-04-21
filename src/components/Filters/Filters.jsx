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
                    <label className="filter-item" htmlFor="ac-input">AC</label>
                    <input type="checkbox" id="ac-input" name="ac"/>
                </div>
            </fieldset>
        </form> 
    )
};
