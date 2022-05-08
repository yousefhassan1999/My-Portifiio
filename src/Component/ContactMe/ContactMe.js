import "./ContactMe.css";

function ContactMe() {
  return (
    <div className="parent">
      {/* <!-- contact section --> */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="title">
            <h2 className="wow animate__animated animate__bounceIn animate__slow">
              Contact Me
            </h2>
          </div>

          <div className="row wow animate__animated animate__fadeInUp animate__slow">
            <div className="contact-left">
              <h2>Send Message Here</h2>
              <form>
                <input type="text" className="form-control" placeholder="Name" />
                <input type="email" className="form-control" placeholder="Email" />
                <textarea placeholder="Message" rows="6"></textarea>
                <button type="submit" className="submit-btn">
                  Send Now
                </button>
              </form>
            </div>

            <div className="contact-right">
              <div>
                <h2>Call Me</h2>
                <p className="text">+201157869779</p>
              </div>
              <div>
                <h2>Send Email</h2>
                <p className="text">yousefhassan121999@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of contact section --> */}
    </div>
  );
}
export default ContactMe;
