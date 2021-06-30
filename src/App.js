import React, { useState, useEffect } from 'react';
import './App.css';
import CircleLoader from "react-spinners/CircleLoader";
import { css } from "@emotion/react";
import Header from "./Components/Navbar/Header.js";
import Footer from "./Components/Footer/Footer.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";
import Experience from "./Components/Experience/Experience.js";
import Projects from "./Components/Projects/Projects.js";
import Skills from "./Components/Skills/Skills.js";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const override = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  return (
    <div className="App">
      {
        loading
        ? 
        <CircleLoader color={"rgb(74, 120, 248)"} loading={loading} css={override} size={100} />
        :
        <>
        <div id="stars1"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
          <Header /> 
          <LandingPage />
          <AboutMe />
          <Skills />
          <Experience />
          <Projects />
          <Footer />
        </>
        }
    </div>
  );
}

export default App;
