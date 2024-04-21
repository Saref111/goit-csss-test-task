import { ActionButton } from 'components/ActionButton/ActionButton';
import { TextInput } from '../TextInput/TextInput';
import './BookingForm.css';

export const BookingForm = () => {
    return (
        <form className="booking-form">
            <h2>Book your campervan now</h2>
            <p>Stay connected! We are always ready to help you.</p>
            <TextInput type="text" name="name" placeholder="Name" required/>
            <TextInput type="email" name="email" placeholder="Email" required/>
            <TextInput type="date" name="date" placeholder="Booking date" required/>
            <textarea className='text-input' name="message" placeholder="Comment"></textarea>
            <ActionButton type='submit'>Book now</ActionButton>
        </form>)
};
