import { useCallback, useEffect } from 'react';
import Portal from './Portal';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const handleClose = useCallback((e) => {
    if (e.code === 'Escape' || e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('keydown', handleClose)

    return () => {
      document.removeEventListener('keydown', handleClose)
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
