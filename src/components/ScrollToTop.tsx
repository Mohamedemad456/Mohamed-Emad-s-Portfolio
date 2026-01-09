import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures each route starts at the top so scroll progress resets to 0.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
}

