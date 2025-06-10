import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Logo />
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search for products..." 
            className="search-input"
          />
          <button className="search-button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path 
                d="M15.25 15.25L11.5 11.5M13.75 7.375C13.75 10.8247 10.8247 13.75 7.375 13.75C3.92525 13.75 1 10.8247 1 7.375C1 3.92525 3.92525 1 7.375 1C10.8247 1 13.75 3.92525 13.75 7.375Z" 
                stroke="white" 
                strokeWidth="1.5" 
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="header-right">
          <div className="auth-links">
            <NavLink to="/signin" className="signin-link">Sign In</NavLink>
            <NavLink to="/account" className="account-link">
              <span className="account-icon">👤</span>
            </NavLink>
          </div>
          <NavLink to="/cart" className="cart-link">
            <img src="/assets/mini-cart.svg" alt="Cart" className="cart-icon" />
            <span className="cart-count">0</span>
          </NavLink>
        </div>
      </div>
      <nav className="main-nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/collections">Collections</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};

export default Header;
