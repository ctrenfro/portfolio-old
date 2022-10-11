import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";

const Contact = () => {
  const [showDiv, setShowDiv] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_spko48b",
        "template_u6b6hyo",
        form.current,
        "36Y2SwkdzTKtWo5E4"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setShowDiv(true);
    let frm = document.getElementsByName("contact-form")[0];
    frm.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ctrenfro22@gmail.com</h5>
            <a href="mailto:ctrenfro22@email.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Chris Renfro</h5>
            <a href="http://m.me/chris.renfro.545">Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/}
        <form name="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      {showDiv && (
        <div id="toast">
          <h2>Thank you for contacting me!</h2>
        </div>
      )}
    </section>
  );
};

export default Contact;
