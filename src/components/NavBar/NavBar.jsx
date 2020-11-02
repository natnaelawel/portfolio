import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function NavBar({ setIsModalOpen }) {
  return (
    <div className="nav__bar">
      {/* <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> */}
      <div className="brand__name">Nathaniel.H</div>
      <div className="nav__right">
        <ul className="nav__links">
          <li className="nav__links__item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__links__item">
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav__links__item">
            {/* <Link to="/#about">About</Link> */}
            <a href="/#about">About</a>
          </li>
        </ul>
        <div className="nav__contact">
          <button onClick={() => setIsModalOpen(isModalOpen => !isModalOpen)}>Get in touch</button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
