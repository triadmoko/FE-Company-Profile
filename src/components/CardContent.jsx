import React from "react";
import "./Style.css";
const CardContent = (props) => {
  return (
    <div className="card mb-5">
      <img
        class="card-img-top"
        src="./assets/img/hero-img.png"
        alt="Content Images"
      />
      <div className="card-body">
        <a href="#/">
          <h5 className="card-title">{props.title}</h5>
        </a>
        <p className="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Consequuntur, reprehenderit deleniti voluptas minima quia nostrum
        </p>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
};
CardContent.defaultProps = {
  title: "No Title",
};
export default CardContent;
