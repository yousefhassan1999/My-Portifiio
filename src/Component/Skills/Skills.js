import "./Skills.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

class Skills extends React.Component {
  render() {
    const options = {
      loop: true,
      margin: 10,
      autoplay: true,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1300: {
          items: 3,
        },
      },
    };
    return (
      <div className="parent">
        {/* <!-- team section --> */}
        <section className="Skills" id="Skills">
          <div className="container">
            <div className="title">
              <h2 className="wow animate__animated animate__bounceIn animate__slow">
                My Skills.
              </h2>
            </div>

            <div className="row wow animate__animated animate__fadeInUp animate__slow">
              <OwlCarousel className="owl-theme" {...options}>
                <div className="detail-item wow animate__animated animate__fadeInLeft animate__slow">
                  <span>
                    <i className="fa-brands fa-html5"></i>
                  </span>
                  <h2>Web Delveloper</h2>
                  <div className="line"></div>
                  <p className="text">
                    I have advanced knowlage in HTML, CSS, JavaScript and have a
                    Certificate from udacity in web developer chalenger track.
                  </p>
                </div>
                <div className="detail-item wow animate__animated animate__fadeInLeft animate__slow">
                  <span>
                    <i className="fa-brands fa-vuejs"></i>
                  </span>
                  <h2>Vue js</h2>
                  <div className="line"></div>
                  <p className="text">
                    I have 2 years experiance with Vue js and i start learning
                    web development by it i have a huge project Online Store in
                    the prev section.
                  </p>
                </div>
                <div className="detail-item wow animate__animated animate__fadeInLeft animate__slow">
                  <span>
                    <i className="fa-brands fa-react"></i>
                  </span>
                  <h2>React Js</h2>
                  <div className="line"></div>
                  <p className="text">
                    now i shifted to react js and build my skils with it and
                    have build alot bages with it Like Edvora tasksin the prev
                    section.
                  </p>
                </div>
                <div className="detail-item wow animate__animated animate__fadeInLeft animate__slow">
                  <span>
                    <i className="fa-brands fa-java"></i>
                  </span>
                  <h2>Back End</h2>
                  <div className="line"></div>
                  <p className="text">
                    I have advanced knowlage on algorithms, OOP, Design Pattern,
                    Java as main langauge , MYSQL and quiry optimizations.
                  </p>
                </div>
                <div className="detail-item wow animate__animated animate__fadeInLeft animate__slow">
                  <span>
                    <i className="fa-solid fa-network-wired"></i>
                  </span>
                  <h2>Networkimg</h2>
                  <div className="line"></div>
                  <p className="text">
                    I have knowlage on networking structure and UDP AND TCP
                    connection and data transfer protocols and other concepts
                    related to network.
                  </p>
                </div>
                <div className="detail-item wow animate__animated animate__fadeInLeft animate__slow">
                  <span>
                    <i className="fa-solid fa-network-wired"></i>
                  </span>
                  <h2>Operating System (Linux)</h2>
                  <div className="line"></div>
                  <p className="text">
                    I have knowlage on operating system and processes and
                    threads and thhe algorithms that it run with and familier
                    with linux.
                  </p>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        {/* <!-- end of team section --> */}
      </div>
    );
  }
}
export default Skills;
