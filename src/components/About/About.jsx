import React from "react";
import "./styles.css";
import profileImg from "../../img/prof.jpg";
function About() {
  return (
    <section id="about" className="panel about">
      <div className="about__title">
        <h1>Who I Am</h1>
        My name's Nathaniel. I'm a full-stack web and mobile app developer based
        in Addis Ababa, Ethiopia.
      </div>
      <div className="about__info">
        <div className="part">
          <h2 className="label">Front-end</h2>
          <p>
            I use HTML, CSS, and JavaScript to produce responsive websites and
            web apps that provide users the best and most appropriate experience
            suited to their device and browser. <br />
            <br />I specilize in application written on react and vue my current
            exeperience and skills in frontend includes
          </p>
          <ol>
            <li>Typescript/javascript</li>
            <li>React with next js and redux</li>
            <li>Vue js Nuxt js and vuex</li>
            <li>Bootstrap, Material-ui and other UI framworks</li>
          </ol>
        </div>
        <div className="part">
          <h2 className="label">Back-end</h2>
          <p>
            I specilize in application written on react and vue my current
            exeperience and skills in frontend includes
            <br />
          </p>
          <ol>
            <li>Node js with express, loopback</li>
            <li>Golang web</li>
            <li>Laravel php</li>
            <li>Api both REST and Graphql</li>
            <li>SEO optimization and Progressive web app</li>
            <li>Testing frameworks like jest, mocha any others</li>
            <li>Database like postgresql, mysql,mongodb and many others</li>
          </ol>
        </div>
        <div className="part">
          <h2 className="label">Mobile app</h2>
          <p>I've much experience on mobile application developement</p>
          <br />
          <ol>
            <li>Native Java android</li>
            <li>Kotlin</li>
            <li>Flutter</li>
            <li>Xamarin</li>
            <li>React Native</li>
          </ol>
        </div>
        <div className="about__info__img">
          <img src={profileImg} width="100%" height="100%" alt="profile" />
        </div>
      </div>
    </section>
  );
}

export default About;
