import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import { ShoppingCart, Heart, Menu, X } from "lucide-react"; // импортируем крестик
import { MdSearch } from "react-icons/md";

import "./Header.scss";

const Header = ({ cartItems = [] }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navRef = useRef(null);
  const burgerRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <NavLink to="/">
        <img src="..\public\Euphoria.png" alt="#" className="logo_zalando" />
      </NavLink>

      <nav ref={navRef} className={`nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><NavLink to="/products" end onClick={toggleMenu}>Shop</NavLink></li>
          <li><NavLink to="/" onClick={toggleMenu}>Men</NavLink></li>
          <li><NavLink to="/" onClick={toggleMenu}>Women</NavLink></li>
        </ul>
      </nav>
      <div className="header__right">
        <NavLink className="header__icon-link" onClick={() =>{alert('it doesnt work yet...')}}>
          <MdSearch size={26} />
        </NavLink>
        <NavLink to="/favorites" className="header__icon-link">
          <Heart />
        </NavLink>
        <NavLink to="/cart" className="header__icon-link">
          <ShoppingCart />
          {cartItems.length > 0 && <span className="count">({cartItems.length})</span>}
        </NavLink>

        <div ref={burgerRef} className="burger-menu" onClick={toggleMenu}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

    </header>
  );
};

export default Header;
