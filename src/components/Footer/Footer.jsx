import React from "react";
import "./styles.css";
function Footer() {
  return (
    <footer className="panel footer">
      <div className="footer__content">
        <div className="footer__content__links">
          <a href="/#">
            <i className="fab fa-facebook fa-2x"></i>
            <p>Facebook</p>
          </a>
          <a href="/#">
            <i className="fab fa-twitter fa-2x"></i>
            <p>Twitter</p>
          </a>
          <a href="/#">
            <i className="fab fa-linkedin-in fa-2x"></i>
            <p>Linkedin</p>
          </a>
          <a href="/#">
            <i className="fab fa-telegram-plane fa-2x"></i>
            <p>Telegram</p>
          </a>
          <a href="/#">
            <i className="fab fa-instagram fa-2x"></i>
            <p>Instagram</p>
          </a>
        </div>
        <div className="footer__content__main">
          <h1 className="footer__content__text">
            Have a project you'd like to work with me?
          </h1>
          <div className="contact__button">
            <a href="/#">Get in Touch</a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>&copy; 2020 Nathaniel Hussein. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
