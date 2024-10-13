import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-area header-sticky">
      <div className="container-fluid">
        <nav className="main-nav">
          <Link to="/" className="logo">
            <img src={logo} alt="Logo" />
          </Link>
          <a className="menu-trigger" onClick={toggleMenu}>
            <span>Menu</span>
          </a>
          <ul className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/" className="active">الرئيسية</Link></li>
            <li><Link to="/Services" id='ServicesLink'>الخدمات</Link></li>
            <li><Link to="/NewsPage" id='NewsPageLink'>معلومات تهمك</Link></li>
            <li><Link to="#">المشاركة</Link></li>
            <li><Link id='AboutUsPageLink' to="/AboutUsPage">مــن نحـن</Link></li>
            <li><Link id='concatPageLink' to='/ContactPage'>تواصل معنا</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
