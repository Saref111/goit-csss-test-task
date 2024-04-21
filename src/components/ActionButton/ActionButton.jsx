import './ActionButton.css';

export const ActionButton = ({ children, onClick, type = "button" }) => {
    const onButtonClick = (e) => {
        onClick && onClick(e);
    };
    return (
        <button type={type} className="action-button" onClick={onButtonClick}>
            {children}
        </button>
    )
};
