import "./MyProjects.css";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ModalVideo from "react-modal-video";

class MyProjects extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      vedioId:"",
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal(name) {
    this.setState({ 
        isOpen: true ,
        vedioId: name
    });
  }
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
        <section className="MyProjects" id="MyProjects">
          <div className="container">
            <div className="title">
              <h2 className="wow animate__animated animate__bounceIn animate__slow">
                My Projects.
              </h2>
            </div>

            <div className="row wow animate__animated animate__fadeInUp animate__slow">
              <OwlCarousel className="owl-theme" {...options}>
                <div className="MyProjects-item">
                  <button
                    className="center popup-youtube"
                    onClick={() => this.openModal('6gPgkNWlsNg')}
                  >
                    <i className="fas fa-play"></i>
                  </button>
                  {/* <a
                    className="center popup-youtube"
                    href="https://www.youtube.com/watch?v=6gPgkNWlsNg"
                    onClick={this.openModal}
                  >
                    <i className="fas fa-play"></i>
                  </a> */}
                  <h2 className="wow animate__animated animate__fadeInUp animate__slow">
                    Edvora Task
                  </h2>
                  <p className="MyProjects-info wow animate__animated animate__fadeInUp animate__slow">
                    Design a responsive single page using React js, html, CSS
                    and JavaScript
                  </p>
                </div>

                <div className="MyProjects-item">
                  <button
                    className="center popup-youtube"
                    onClick={() => this.openModal('0jGj0IXiRaE') }
                  >
                    <i className="fas fa-play"></i>
                  </button>
                  {/* <a
                    className="center popup-youtube"
                    href="https://youtu.be/0jGj0IXiRaE"
                  >
                    <i className="fas fa-play"></i>
                  </a> */}
                  <h2 className="wow animate__animated animate__fadeInUp animate__slow">
                    Online Store
                  </h2>
                  <p className="MyProjects-info wow animate__animated animate__fadeInUp animate__slow">
                    Full Project Online Stroe like amazon Using Vue js, Java,
                    Spring Boot, Junit, MySQL, html, CSS and JavaScript .
                  </p>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        {/* <!-- end of team section --> */}
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId={this.state.vedioId}
          onClose={() => this.setState({ isOpen: false })}
        />
      </div>
    );
  }
}
export default MyProjects;
