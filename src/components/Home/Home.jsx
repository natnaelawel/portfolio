import React, { useState } from "react";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MyModal from "../Modal/Modal";
import Services from "../Services/Services";
import "./styles.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="get__in_touch_modal" className="home">
      <Header setIsModalOpen={setIsModalOpen} />
      {isModalOpen ? (
        <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      ) : (
        <div>
          <Services />
          <About id="about" />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default Home;
