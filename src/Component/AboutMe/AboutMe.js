import "./AboutMe.css";
import image from "./imge2.jpg";
function AboutMe() {
  return (
    <div className="parent">
      <section className="about">
        <div className="container">
          <div className="row">
            <div className="about-left wow animate__animated animate__fadeInUp animate__slow">
              <img src={image} alt=""></img>
            </div>
            <div className="about-right wow animate__animated animate__fadeInUp animate__slow">
              <div className="title">
                <h2>About Me</h2>
                <h3>Full Stack <span style={{"color":"#f9004d"}}>Developer.</span></h3>
              </div>
              <div className="about-item">
                <div>
                  <p>
                    I am an Undergraduate Software Engineer ,CSED Student
                    Faculty of Engineering Alexandria University Seeking a
                    challenging and rewarding opportunity with a software
                    engineering firm to use and grow my coding skills
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default AboutMe;
