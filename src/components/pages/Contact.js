import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_psm3dzg",
        "template_vxekoff",
        form.current,
        "aPnQ-uRYaZI_i9MAA"
      )
      .then(
        (result) => {
          console.log("email sent successfully");
        },
        (error) => {
          console.log("email unsuccessful");
        }
      );
    e.target.reset();
  };
  return (
    <section className="contactcontainer">
      <h1 className="title">Contact Anthony</h1>
      <div id="contactLinkContainer">
        <div className="contact-links">
          <h2 className="linkH2">
            <a href="https://github.com/aHoff6">
              <span className="icons" title="GitHub">
                <i className="fa fa-github"></i>
              </span>{" "}
              Github
            </a>
          </h2>
          <div className="contactSpace">    </div>
          <h2 className="linkH2">
            <a href="https://www.linkedin.com/in/anthony-c-hoffman/">
              <span className="icons" title="LinkedIn">
                <i className="fa fa-linkedin"></i>
              </span>{" "}
              LinkedIn
            </a>
          </h2>
        </div>
      </div>
      <div className="emailContainer">
        
        <form ref={form} onSubmit={sendEmail} className="contactbox">
        <h2 className="emailIntroText">Send me an email</h2>
          <input
            className="contactbox"
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input
            className="contactbox"
            type="email"
            placeholder="Email"
            name="user_email"
            required
          />
          <input
            className="contactbox"
            type="text"
            placeholder="Subject"
            name="subject"
            required
          />
          <textarea
           className="contactbox"
            name="message"
            placeholder="Enter Message Text"
          ></textarea>
          <button type="submit" className="sendbtn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
