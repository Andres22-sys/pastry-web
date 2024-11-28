// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import logo from '/src/assets/hberry.png';
import searchLogo from '/src/assets/navbar/search.png';
import userLogo from '/src/assets/navbar/user.png';
import shopLogo from '/src/assets/navbar/shopping-cart.png';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="content">
                <div className="logo">
                    <img src={logo} alt="Huckleberry Pastry" />
                </div>
                <button
                    className="mobile-menu-toggle"
                    aria-label="Toggle Menu"
                    onClick={toggleMenu}
                >
                    <span className="menu-icon"></span>
                </button>
                <nav className={`header-menu ${menuOpen ? 'active' : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#about-us" onClick={() => setMenuOpen(false)}>About Us</a></li>
                        <li><a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a></li>
                        <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
                    </ul>
                </nav>
                <nav className="header-cta">
                    <ul>
                        <li><a href="#"><img src={searchLogo} alt="Search" /></a></li>
                        <li><a href="#"><img src={userLogo} alt="User" /></a></li>
                        <li><a href="#"><img src={shopLogo} alt="Shopping Cart" /></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
