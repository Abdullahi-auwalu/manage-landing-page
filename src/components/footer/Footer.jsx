import "./footer.css";
import Logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import youtube from "../../images/icon-youtube.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";
import instagram from "../../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="footer bg-neutral-900">
      <div className="cont-1">
        <div className="f-logo">
          <a href="/">
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="social-icons">
          <ul className="social-items" aria-label="Social links">
            <li>
              <a href="/facebook" aria-label="facebook">
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a href="/youtube" aria-label="youtube">
                <img src={youtube} alt="youtube" />
              </a>
            </li>
            <li>
              <a href="/twitter" aria-label="twitter">
                <img src={twitter} alt="twitter" />
              </a>
            </li>
            <li>
              <a href="/pintrest" aria-label="pintrest">
                <img src={pinterest} alt="pintrest" />
              </a>
            </li>
            <li>
              <a href="/instagram" aria-label="instagram">
                <img src={instagram} alt="instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="cont-2">
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/product">Product</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/about">Career</a>
          </li>
          <li>
            <a href="/about">Community</a>
          </li>
          <li>
            <a href="/about">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="cont-3">
        <form action="">
          <input type="email" placeholder="abc@gmail.com" />
          <button className="f-btn">Go</button>
          <p>Copyright 2023. All Rights Reserved</p>
        </form>
      </div>
    </div>
  );
};

export default Footer;
