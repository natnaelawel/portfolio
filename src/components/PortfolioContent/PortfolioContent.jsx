import React from "react";
import "./styles.css";
import image1 from "../../img/clip-programming.png";
import image2 from "../../img/bg-2.png";
import image3 from "../../img/image1.png";
import image4 from "../../img/image4.jpg";
import covidTracker from "../../img/covid_tracker.jpg";
import seoBlog from "../../img/seoblog.jpg";
import memoriesApp from "../../img/memories_app.jpg";
import mernEcommerce from "../../img/mern-ecommerce.jpg";
import chatAppSocketIo from "../../img/chatappsocketio.jpg";
import chatAppGrapql from "../../img/chatappsocketio.jpg";
function PortfolioContent() {
  return (
    <div className="portfolio__content">
      <div className="panel portfolio__content__section__one">
        <div className="title">
          <h1>Top Projects</h1>
        </div>
        <div className="content">
          <div className="project">
            <img src={covidTracker} alt="project" />
            <div className="check">
              <a href="https://github.com/natnaelawel/covid-tracker">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={seoBlog} alt="project" />
            <div className="check">
              <a href="https://github.com/natnaelawel/seo-blog">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={memoriesApp} alt="project" />
            <div className="check">
              <a href="https://github.com/natnaelawel/mern-memories-app">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={mernEcommerce} alt="project" />
            <div className="check">
              <a href="https://github.com/natnaelawel/mern-ecommerce">View Projects</a>
            </div>
          </div>
        
        
        </div>
           <div className="content">
          <div className="project">
            <img src={chatAppSocketIo} alt="project" />
            <div className="check">
              <a href="https://github.com/natnaelawel/chat-app-reactjs">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={chatAppGrapql} alt="project" />
            <div className="check">
              <a href="https://github.com/natnaelawel/graphql-chat-app">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={memoriesApp} alt="project" />
            <div className="check">
              <a href="https://github.com/natnaelawel/mern-memories-app">View Projects</a>
            </div>
          </div>
          <div className="project">
            <img src={mernEcommerce} alt="project" />
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
