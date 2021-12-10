import React from "react";
import "./Header.css";
import SearchOutlined from "@mui/icons-material/SearchOutlined";

function Header() {
  return (
    <div className="header">
      <div className="promo">
        <p>
          DEMON SLAYER: KIMETSU NO YAIBA - ENTERTAINMENT DISTRICT ARC - START
          WATCHING WITH A 14 DAY FREE TRIAL
        </p>
      </div>
      <div className="nav_container">
        <nav className="nav">
          <div className="logo">
            <img
              src="https://static.funimation.com/static/img/common/funimation-logo.svg"
              alt="funimation logo"
            />
          </div>
          {/* Need to complete the actual dropdown of the menu and the hover effects */}
          <ul className="dropDown">
            <li className="stream">
              <p>Stream</p>
              <ul className="nav_content">
                <li>All Titles</li>
                <li>Current Season</li>
                <li>Schedule</li>
              </ul>
            </li>
            <li>
              <p className="discover">Discover</p>
              <ul className="nav_content">
                <li>Games</li>
                <li>News</li>
                <li>Theatrical</li>
              </ul>
            </li>
            <li>
              <p className="Shop">Shop</p>
              <ul className="nav_content">
                <li>Home Video</li>
                <li>Pre-Orders</li>
                <li>Figures & Collectables</li>
                <li>Accessories</li>
                <li>Apparel</li>
                <li>Home Goods</li>
                <li>Gift Cards</li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className="headerRight">
          <div className="promoBtn">
            <p>Try Premium Plus</p>
          </div>
          <div className="loginContainer">
            <ul>
              <li className="login">Log in</li>
              <li>
                <SearchOutlined />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
