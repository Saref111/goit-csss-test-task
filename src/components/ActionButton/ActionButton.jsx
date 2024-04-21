import './ActionButton.css';

export const ActionButton = ({ children, onClick }) => {
    return (
        <button className="action-button" onClick={onClick}>
            {children}
        </button>
    )
};
