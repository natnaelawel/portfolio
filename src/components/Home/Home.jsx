import React, { useState } from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyModal from "../Modal/Modal";
import Services from "../Services/Services";
import "./styles.css";
import { gsap } from "gsap";
import { useEffect } from "react";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fadeIn = () => {
    const modalBox = document.querySelector(".modal__box");
    console.log(modalBox)
    let tl = gsap.timeline();
    tl.from(modalBox, {
      x: 1000,
      opacity: 0,
      duration: 1,
      ease: "elastic.InOut",
    });
  };
 useEffect(() => {
    document.title = "Nathaniel Awel"
  }, [])

  useEffect(() => {
    fadeIn()
  }, [isModalOpen])
  return (
    <div id="get__in_touch_modal" className="home">
      <Header setIsModalOpen={setIsModalOpen} />
      {isModalOpen ? (
        <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} /> 
      ) : (
        <>
          <Services />
          <About id="about" />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
