import {useRef} from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_psm3dzg', 'template_vxekoff', form.current, 'aPnQ-uRYaZI_i9MAA')
        .then((result) => {
            console.log("email sent successfully");
        }, (error) => {
            console.log("email unsuccessful");
        });
        e.target.reset();
    };
  return (
    <section className="contactcontainer">
        <h1 className="title">Contact Anthony</h1>
      <div>
        
        <form ref={form} onSubmit={sendEmail} className="contactbox">
          <input
          className="contactbox"
            type="text"
            placeholder="Full Name"
            name="user_name" required />
          <input 
          className="contactbox"
            type="email"
            placeholder="Email"
            name="user_email" required />
            <input 
            className="contactbox"
            type="text"
            placeholder="Subject"
            name="subject" required />
            <textarea name="message" placeholder="Enter Message Text" className="contactbox"></textarea>
            <button type="submit" className="sendbtn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
