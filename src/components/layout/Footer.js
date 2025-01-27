import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles/Footer.css';

const Footer = () => {
  const location = useLocation();
  const isFixed = !['/experience', '/projects'].includes(location.pathname);
  
  return (
    <footer className={`footer ${isFixed ? 'footer-fixed' : 'footer-relative'}`}>
      <div className="footer-content">
        © 2022-2025 Yizheng (Jerry) Shi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 