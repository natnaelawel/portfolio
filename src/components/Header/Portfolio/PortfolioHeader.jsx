import React, { useEffect } from "react";

import image1 from "../../../img/image13.svg";
import image2 from "../../../img/image5.svg";
import NavBar from "../../NavBar/NavBar";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { RoughEase } from "gsap/EasePack";
import "./styles.css";
function PortfolioHeader() {
  gsap.registerPlugin(TextPlugin, RoughEase);
  const words = ["You can check my works", "on github."];
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

    let masterTl = gsap.timeline({ repeat: -1 });
    words.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to(".check__github", {
        duration: 1,
        text: word,
        // ease: "power3.inOut",
      });
      masterTl.add(tl);
    });
  }, [words]);

  useEffect(() => {}, []);

  return (
    <section className="panel header">
      <NavBar />
      <div className="header__content">
        <div className="header__content__info">
          <h1
            className="header__content__info__text"
            style={{ fontSize: "3rem" }}
          >
            <span className="check__github"></span>

            <span className="cursor name">_</span>
          </h1>
          <div className="header__content__info__text__lower">
            <div className="header__content__info__btn">
              {/* <a href="/#">Check my github</a> */}
              <a
                target="_blank"
                href="https://github.com/natnaelawel?tab=repositories"
                rel="noopener noreferrer"
              >
                Check my github
              </a>
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

export default PortfolioHeader;

// import image1 from "../../../img/image13.svg";
// import image2 from "../../../img/image5.svg";

// import { Scroll } from "framer";
// import { useMotionValue, Frame, useTransform } from "framer";
// import { gsap } from "gsap";
// import { TextPlugin } from "gsap/TextPlugin";
// import { RoughEase } from "gsap/EasePack";
// import { useEffect } from "react";
// function PortfolioHeader() {
//   gsap.registerPlugin(TextPlugin, RoughEase);
//   const words = ["You can check my works", "on github."];
//   useEffect(() => {
//     let cursor = gsap.timeline().from(".cursor", {
//       opacity: 0,
//     });
//     cursor
//       .to(".cursor", {
//         opacity: 0,
//         ease: "power2.inOut",
//         repeat: -1,
//       })
//       .pause();

//     let hiTl = gsap.timeline();
//     hiTl
//       // .from(".hi", { duration: 1, opacity: 0, x: "-100px", ease: "elastic.inOut(1, 0.3)" })
//       .from(".hello", {
//         y: "-20vh",
//         opacity: 0,
//         ease: "elastic.inOut",
//         duration: 3,
//         onComplete: () => {
//           console.log("compoleted");
//           cursor.play();
//           masterTl.play();
//         },
//       });

//     let masterTl = gsap.timeline({ repeat: -1 }).pause();
//     words.forEach((word) => {
//       let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
//       tl.to(".check__github", {
//         duration: 1,
//         text: word,
//         // ease: "power3.inOut",
//       });
//       masterTl.add(tl);
//     });
//   }, [words]);

//   useEffect(() => {}, []);
