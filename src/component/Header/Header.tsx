import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { headerData } from "../../mockData/headerData";
import { HeaderStyle } from "./Header.style";

function Header() {
  return (
    <HeaderStyle>
      <section className="navbar-container">
        <Link to="/" className="logo-wrapper">
          <img
            src="./images/amazon-logo.png"
            alt="site-logo"
            className="logo"
          />
        </Link>

        <article className="header-search">
          <input type="text" className="search-bar" />
          <SearchIcon className="search-icon" />
        </article>

        <article className="header-nav">
          {headerData.map((navData) => {
            const { title, navLink } = navData;
            return (
              <article className="nav-items">
                <span className="nav-title">{title}</span>
                <h2 className="nav-link">{navLink}</h2>
              </article>
            );
          })}

          <Link to="/checkout" className="basket-items">
            <ShoppingBasketIcon className="basket-icon" />
            <span className="item-count">0</span>
          </Link>
        </article>
      </section>
    </HeaderStyle>
  );
}

export default Header;
