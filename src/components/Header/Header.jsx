import React from "react";
import NavBar from "../NavBar/NavBar";
import "./style.css";
import image1 from "../../img/image4.jpg";
import image2 from "../../img/image6.svg";

// import { Scroll } from "framer";
// import { useMotionValue, Frame, useTransform } from "framer";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Header({ setIsModalOpen }) {
  gsap.registerPlugin(TextPlugin, RoughEase);
  // const letters = ["N", "a", "t", "h", "a", "n", "i", "e", "l"];
  const name = "Nathaniel";
  // const y = useMotionValue(0);
  // const logoY = useTransform(y, (value) => value / 4);
  useEffect(() => {
    let cursor = gsap.timeline().from(".cursor", {
      opacity: 0,
    });
    cursor
      .to(".cursor", {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
      })
      .pause();

    let hiTl = gsap.timeline();
    hiTl
      // .from(".hi", { duration: 1, opacity: 0, x: "-100px", ease: "elastic.inOut(1, 0.3)" })
      .from(".hello", {
        y: "-20vh",
        opacity: 0,
        ease: "elastic.inOut",
        duration: 3,
        onComplete: () => {
          console.log("compoleted");
          cursor.play();
          masterTl.play();
        },
      });

    let masterTl = gsap.timeline({ repeat: -1 }).pause();
    name.split().forEach((letter) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });
      tl.to(".my-name", { duration: 3, text: letter, ease: "power3.inOut" });
      masterTl.add(tl);
    });
  }, []);

  useEffect(() => {
    // let imageTl = gsap.timeline();
    // imageTl
    // .from(".header__content__images__one", {
    // duration: 1,
    // x: "100vw",
    // ease: "bounce.out",
    // overflowX: "hidden",
    // })
    // .from(".header__content__images__two", {
    //     duration: 1,
    //     x: "1000px",
    //     ease: "elastic",
    //     // overflowX: "hidden",
    // });
  }, []);

  return (
    <section className="panel header">
      <NavBar setIsModalOpen={setIsModalOpen} />
      <div className="header__content">
        <div className="header__content__info">
          <h1 className="header__content__info__text">
            <span className="hello">Hi, I'm </span>
            <span className="my-name"></span>

            <span className="cursor name">_</span>
          </h1>
          <div className="header__content__info__text__lower">
            <p>a full-stack web and mobile application developer</p>
            <div className="header__content__info__btn">
              <Link to="/portfolio">View Projects</Link>
            </div>
          </div>
        </div>
        <div className="header__content__images">
          <div className="header__content__images__one">
            <img className="" src={image1} alt="background" />
          </div>
          <div className="header__content__images__two">
            <img className="" src={image2} alt="background" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
