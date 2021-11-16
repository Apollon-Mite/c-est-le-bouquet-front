import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop({ setLocationHome }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname === '/') {
      setLocationHome(true);
    }
    else {
      setLocationHome(false);
    }
  }, [pathname]);

  return null;
}
