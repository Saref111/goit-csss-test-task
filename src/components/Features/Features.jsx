import { CategoriesList } from "../CategoriesList/CategoriesList";
import './Features.css';

export const Features = ({ item }) => {
    console.log(item);
    return (
        <div className="features">
            <CategoriesList itemsObject={item.details} />
            <h3>Vehical details</h3>
            <dl>
                <div>
                    <dt>Form</dt>
                    <dd>{item.form}</dd>
                </div>
                <div>
                    <dt>Length</dt>
                    <dd>{item.length}</dd>
                </div>
                <div>
                    <dt>Width</dt>
                    <dd>{item.width}</dd>
                </div>
                <div>
                    <dt>Height</dt>
                    <dd>{item.height}</dd>
                </div>
                <div>
                    <dt>Tank</dt>
                    <dd>{item.tank}</dd>
                </div>
                <div>
                    <dt>Consumption</dt>
                    <dd>{item.consumption}</dd>
                </div>
            </dl>
        </div>
    )
}
