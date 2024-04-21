import React, { useState } from "react";
import Modal from "components/Modal/Modal";
import { useDispatch } from "react-redux";
import { removeItem } from "store/modalSlice";
import { Link } from "react-router-dom";
import { ReactComponent as Star } from "../../icons/star.svg";
import { ReactComponent as MapPinIcon } from "../../icons/map-pin.svg"; 
import { Features } from "../Features/Features";
import { Reviews } from "../Reviews/Reviews";
import "./DetailsModal.css";

export const DetailsModal = ({ item }) => {
    const [tab, setTab] = useState('features');
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(removeItem());
    }
    return item && (
        <Modal isOpen={!!item} onClose={handleClose}>
            <div className="details">
                <div className="details__header">
                    <div>
                        <h2 className="details__title">{item.name}</h2>
                        <span className="details__prop">
                            <Star />
                            {' '}
                            {item.rating}
                            {item.reviews.length && <Link to={`/${item._id}/reviews`}>({item.reviews.length} Reviews)</Link>}
                        </span>
                        <span className="details__prop"><MapPinIcon />{item.location}</span>
                    </div>
                    <button onClick={handleClose} className="details__close" aria-label="close"></button>
                </div>
                <div className="details__main">
                    <ul className="details__gallery">
                        {item.gallery.map((img, index) => (
                            <li key={index}>
                                <img src={img} alt={item.name} width={290} height={310}/>
                            </li>
                        ))}
                    </ul>`
                    <p className="details__text">{item.description}</p>
                    <div className="details__tabs">
                        <ul className="details__tabs-nav">
                            <li>
                                <button className={`${tab === 'features' ? 'active' : ''}`} onClick={() => setTab('features')}>Fetures</button>
                            </li>
                            <li>
                                <button className={`${tab === 'reviews' ? 'active' : ''}`} onClick={() => setTab('reviews')}>Reviews</button>
                            </li>
                        </ul>
                        {tab === 'features' && <Features item={item}/>}
                        {tab === 'reviews' && <Reviews reviews={item.reviews}/>}
                    </div>
                </div>
            </div>
        </Modal>
    )
};
