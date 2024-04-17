import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScroll() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

}

export default useScroll;