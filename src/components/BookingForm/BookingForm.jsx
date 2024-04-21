import { TextInput } from '../TextInput/TextInput';
import './BookingForm.css';

export const BookingForm = () => {
    return (
        <form className="booking-form">
            <h2>Book your campervan now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <TextInput type="text" name="name" placeholder="Name" required/>
        </form>)
};
