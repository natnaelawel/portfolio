import React from "react";
import "./styles.css";
import PortfolioHeader from "../Header/Portfolio/PortfolioHeader";
import PortfolioContent from "../PortfolioContent/PortfolioContent";
import Footer from "../Footer/Footer";
function Portfolio() {

  return (
    <section className="portfolio">
      <PortfolioHeader/>
      <PortfolioContent/>
      <Footer/>
    </section>
  );
}

export default Portfolio;
