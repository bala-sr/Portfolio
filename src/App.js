import './App.css';
import Header from "./Components/Navbar/Header.js";
import Footer from "./Components/Footer/Footer.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import AboutMe from "./Components/AboutMe/AboutMe.js";
import Experience from "./Components/Experience/Experience.js";
import Projects from "./Components/Projects/Projects.js";

function App() {
  return (
    <div className="App">
      <Header />
      <LandingPage />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
