import React from "react";
import "./styles.css";
import PortfolioHeader from "../Header/Portfolio/PortfolioHeader";
import PortfolioContent from "../PortfolioContent/PortfolioContent";
import Footer from "../Footer/Footer";
import MyModal from "../Modal/Modal"
function Portfolio() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
     <section id="get__in_touch_modal" className="portfolio">
      <PortfolioHeader setIsModalOpen={setIsModalOpen} />
      {isModalOpen ? (
        <MyModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      ) : (
        <>
          <PortfolioContent/>
          <Footer/>
        </>
      )}
    </section>
  );
}

export default Portfolio;
