import "./intro.css";
import Illustration from "../../images/illustration-intro.svg";

const Intro = () => {
  return (
    <div className="container padding-block-900 even-columns intro-container">
      <div className="intro-left">
        <h1 className="fs-primary-heading fw-bold">
          Bring everyone together to build better product
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          delectus obcaecati at! Incidunt itaque, corrupti fugit distinctio
          facere autem quo odio repellendus culpa voluptatum, ab sunt esse vero,
          temporibus quidem!
        </p>
        <button className="btn">Get Started</button>
      </div>
      <div className="intro-right">
        <img src={Illustration} alt="" />
      </div>
    </div>
  );
};

export default Intro;
