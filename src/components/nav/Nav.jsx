import "./nav.css";
import Logo from "../../images/logo.svg";
import CloseIcon from "./assert/icon-close.svg";
import OpenIcon from "./assert/icon-hamburger.svg";
import { useState } from "react";

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="primary-heading">
      <div className="nav-container container">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <button
          onClick={() => setNavToggle(!navToggle)}
          className="toggle"
          aria-controls="primary-navigation"
        >
          <span className="visually-hidden">Menu</span>
          {navToggle ? (
            <img className="open-icon" src={CloseIcon} alt="" />
          ) : (
            <img className="open-icon" src={OpenIcon} alt="" />
          )}
        </button>
        <nav className="primary-navigation">
          <ul className="nav-list" id={navToggle ? "primary-navigation" : ""}>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Product</a>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
          </ul>
        </nav>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
};

export default Nav;
