import { useEffect } from 'react';

export default function useClosePopup(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (event.constructor === MouseEvent) {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      } else if (event.constructor === KeyboardEvent) {
        if (event.keyCode !== 27) {
          return;
        }
        handler(event);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('keydown', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('keydown', listener);
    };
  }, [ref, handler]);
}
