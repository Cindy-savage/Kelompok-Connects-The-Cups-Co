import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const backPaths = {
  '/services': '/',
  '/antrian': '/services',
  '/struk': '/antrian',
  '/pilih-meja': '/services',
  '/reservasi': '/pilih-meja',
  '/finish': '/reservasi',
  '/riwayat': '/',
  '/comingsoon': '/',
  '/faq': '/',
  '/privacy': '/'
};

export default function Navbar() {
  const location = useLocation();
  const checkboxRef = useRef(null);
  const backPath = backPaths[location.pathname];
  const hasBack = !!backPath;

  // Close mobile menu on route change
  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  }, [location]);

  const closeMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
    }
  };

  return (
    <nav className={`site-nav ${hasBack ? 'with-back' : ''}`}>
      {hasBack && (
        <Link to={backPath} className="nav-back">
          ←
        </Link>
      )}

      <Link to="/" className="nav-left" onClick={closeMenu}>
        <img src="/assets/images/logo.png" alt="The Cups & Co Logo" />
        <span>The Cups & Co</span>
      </Link>

      <input type="checkbox" id="menu-toggle" ref={checkboxRef} />
      <label htmlFor="menu-toggle" className="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className="nav-menu">
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/services" onClick={closeMenu}>Services</Link>
        <Link to="/pilih-meja" onClick={closeMenu}>Reservation</Link>
        <Link to="/riwayat" onClick={closeMenu}>Riwayat</Link>
      </div>
    </nav>
  );
}
