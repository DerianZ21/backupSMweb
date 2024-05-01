import { useState, useEffect } from 'react';

function useHeaderVisible() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0;

    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;  // Asegúrate de que la lógica es correcta para tu caso de uso
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return [isVisible, setIsVisible];  // Retorna tanto el estado como la función de actualización
}

export default useHeaderVisible;