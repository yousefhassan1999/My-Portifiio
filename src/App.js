import "./App.css";
import "./resources/normalize.css";
import "./resources/font.css";
import "./resources/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css";
import "./resources/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";
import "./resources/animate.css-main/animate.css";
import "./resources/appleple-modal-video-158601b/css/modal-video.css";
// import $ from "jquery";
import React, { Component } from "react";
import Header from "./Component/Header/Header";
import AboutMe from "./Component/AboutMe/AboutMe";
import MyProjects from "./Component/MyProjects/MyProjects";
import Skills from "./Component/Skills/Skills";
import ContactMe from "./Component/ContactMe/ContactMe";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <MyProjects />
        <Skills />
        <ContactMe />

        {/* <!-- wow js --> */}
        <script src="./resources/WOW-master/dist/wow.js"></script>
        
      </div>
    );
  }
}

export default App;
