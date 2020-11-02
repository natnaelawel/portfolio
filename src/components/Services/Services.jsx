import React from 'react'
import './style.css'
import icon1 from "../../img/icon1.svg";
import icon2 from "../../img/icon2.svg";
import icon3 from "../../img/icon3.svg";
function Services() {
    return (
      <section className="panel services">
        <div className="services__title">
          <h1>Services</h1>
        </div>
        <div className="services__content">
          <div className="services__content__item">
            <div className="services__content__item__image">
              <img src={icon3} alt="frontend" />
            </div>
            <h1>FrontEnd Stack</h1>
            <p>
              HTML/Css/Javascript, React js, Vue js with UI libraries like
              Material-Ui, React-bootstrap
            </p>
          </div>
          <div className="services__content__item">
            <div className="services__content__item__image">
              <img src={icon2} alt="frontend" />
            </div>
            <h1>BackEnd Stack</h1>
            <p>Node js, express js, PHP, Laravel, Go, loopback js</p>
          </div>
          <div className="services__content__item">
            <div className="services__content__item__image">
              <img src={icon1} alt="frontend" />
            </div>
            <h1>Mobile App</h1>
            <p>Native java and kotlin android, flutter, xamarin</p>
          </div>
        </div>
      </section>
    );
}

export default Services
