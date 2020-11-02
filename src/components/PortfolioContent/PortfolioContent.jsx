import React from "react";
import "./styles.css";
import image1 from "../../img/clip-programming.png";
import image2 from "../../img/bg-2.png";
import image3 from "../../img/image1.png";
import image4 from "../../img/image4.jpg";
function PortfolioContent() {
  return (
    <div className="portfolio__content">
      <div className="panel portfolio__content__section__one">
        <div className="title">
          <h1>Top Projects</h1>
        </div>
        <div className="content">
          <div className="project">
            <img src={image1} alt="project" />
            <div className="check">
              <a href="/#">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={image2} alt="project" />
            <div className="check">
              <a href="/#">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={image3} alt="project" />
            <div className="check">
              <a href="/#">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={image4} alt="project" />
            <div className="check">
              <a href="/#">View Projects</a>
            </div>
          </div>
        </div>
      </div>
      <div className="panel portfolio__content__section__two">
        <div className="title">
          <h1>Recent Projects</h1>
        </div>
        <div className="content">
          <div className="project">
            <img src={image1} alt="project" />
            <div className="check">
              <a href="/#">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={image1} alt="project" />
            <div className="check">
              <a href="/#">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={image1} alt="project" />
            <div className="check">
              <a href="/#">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={image1} alt="project" />
            <div className="check">
              <a href="/#">View Projects</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioContent;
