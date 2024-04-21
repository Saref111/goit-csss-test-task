import Modal from "components/Modal/Modal";
import { useDispatch } from "react-redux";
import { removeItem } from "store/modalSlice";

export const DetailsModal = ({item}) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(removeItem());
    }
    return item && (
        <Modal isOpen={!!item} onClose={handleClose}>
            <div className="details-modal">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
            </div>
        </Modal>
    )
};
