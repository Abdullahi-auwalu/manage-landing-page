import "./diff.css";

const Diff = () => {
  return (
    <div className=" container even-columns diff-container">
      <div className="diff-left">
        <h2 className="fs-secondary-heading fw-bold">
          What's different about Manage?
        </h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quo
          facere a deleniti voluptates doloribus dicta rem ipsam itaque
          incidunt?
        </p>
      </div>
      <div className="diff-right">
        <ul className="numbered-items">
          <li>
            <h3 className="fs-600 fw-bold">01</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione iste beatae repellat totam quidem alias quia, voluptas
              dicta id esse, eaque itaque eum maiores temporibus veniam
              voluptatum. Deleniti, minus.
            </p>
          </li>
          <li>
            <h3 className="fs-600 fw-bold">02</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione iste beatae repellat totam quidem alias quia, voluptas
              dicta id esse, eaque itaque eum maiores temporibus veniam
              voluptatum. Deleniti, minus.
            </p>
          </li>
          <li>
            <h3 className="fs-600 fw-bold">03</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              ratione iste beatae repellat totam quidem alias quia, voluptas
              dicta id esse, eaque itaque eum maiores temporibus veniam
              voluptatum. Deleniti, minus.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Diff;
