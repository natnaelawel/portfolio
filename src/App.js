import React from "react";
// import React, { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import "./App.css";
// import { gsap } from "gsap";
// import { RoughEase } from "gsap/EasePack";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/all";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Portfolio from "./components/Portfolio/Portfolio";
// import { useMediaQuery, useMediaQueries } from "@react-hook/media-query";

function App(props) {

  // const [matches, setMatches] = useState(false);
  // console.log(props);
  // matches = window.matchMedia("(max-width: 700px)");

  // console.log("is matches", matches);
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(ScrollToPlugin);
  // gsap.registerPlugin(RoughEase);

  // useEffect(() => {
  //   let isMatch = window.matchMedia("(max-width: 700px)");
  //   setMatches(isMatch);
  // });

  // const goToSection = (i, anim) => {
  //   const firstElem = document.querySelector(".panel");
  //   // let innerHeight = panel.clientHeight;
  //   console.log("current ", i);
  //   let panels = gsap.utils.toArray(".panel");
  //   let innerHeight = panels[i].clientHeight;
  //   console.log("inner height is ", innerHeight);
  //   gsap.to(window, {
  //     scrollTo: { y: i * innerHeight + firstElem.offsetTop, autoKill: false },
  //     duration: 1,
  //   });

  //   if (anim) {
  //     anim.restart();
  //   }
  // };
  // useEffect(() => {
  //   // gsap.set("body", { overflow: "hidden" });
  //   if (matches) {
  //     gsap.utils.toArray(".panel").forEach((panel, i) => {
  //       ScrollTrigger.create({
  //         trigger: panel,
  //         onEnter: () => goToSection(i),
  //       });

  //       ScrollTrigger.create({
  //         trigger: panel,
  //         start: "bottom bottom",
  //         onEnterBack: () => goToSection(i),
  //       });
  //     });
  //   }
  // }, [matches]);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
