import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(el.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => document.body.removeChild(el.current);
  }, []);

  return createPortal(children, el.current);
};

export default Portal;
