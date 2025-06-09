import React, { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    show && (
      <button
        style={{
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          padding: '10px',
        }}
        onClick={scrollTop}
      >
        🔝 Top
      </button>
    )
  );
};

export default ScrollToTop;
