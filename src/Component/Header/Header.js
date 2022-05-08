import "./Header.css";
import $ from "jquery";
import React from "react";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    let pos = $(window).scrollTop();
    if(pos >= 100){
        $('.navbar').addClass('cng-navbar');
    } else {
        $('.navbar').removeClass('cng-navbar');
    }
  };
  handleClick = () => {
    $(".navbar-collapse").slideToggle(400);
  };
  render() {
    return (
      <div className="parent">
        {/* <!-- Start Header --> */}
        <header className="header" id="intro">
          <nav className="navbar">
            <div className="container">
              <div className="brand-and-toggler">
                <a href="/" className="navbar-brand">
                  Portofo<span style={{"color":"#f9004d"}}>lio</span>
                </a>
                <button
                  type="button"
                  className="navbar-toggler"
                  id="navbar-toggler"
                  onClick={this.handleClick}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>

              <div className="navbar-collapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a href="#intro" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#feature" className="nav-link">
                      About Me
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#team" className="nav-link">
                      My Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#pricing" className="nav-link">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#testimonial" className="nav-link">
                      Contact Me
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="hero-div center container">
            <h1>
              Hello, my name is <br></br>
              <span>Yousef Hassan</span>
            </h1>
            <p className="animate__animated animate__fadeInUp animate__slow">
              I'am a Full Stack Developer.
            </p>

            <div className="hero-btns animate__animated animate__fadeInUp animate__slow">
              <button type="button" className="btn-trans">
                <a href="https://www.linkedin.com/in/yousef-hassan-985b6b210/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </button>
              <button type="button" className="btn-white">
                <a href="https://www.linkedin.com/in/yousef-hassan-985b6b210/">
                  <i className="fab fa-facebook"></i>
                </a>
              </button>
            </div>
          </div>
        </header>
        {/* <!-- End Header --> */}
      </div>
    );
  }
}

export default Header;
