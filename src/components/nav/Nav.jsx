import "./nav.css";
import Logo from "../../images/logo.svg";

const Nav = () => {
  return (
    <div className="prymary-heading">
      <div className="container">
        <a href="/">
          <img src={Logo} alt="" />
        </a>
        <nav className="primary-navigation">
          <ul className="nav-list">
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
