import React from "react";
import PropTypes from "prop-types";
import styles from "./AppContactUs.module.css";
import imgContact from "../Images/img-personal-email.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AppContactUs = () => (
  <div className={styles.AppContactUs} data-testid="AppContactUs">
    <div>
      <h1 className="fontMain">CONTACT US</h1>
      <p>
        Please feel free to get in touch using the form below. We'd love to hear
        your thoughts and answer any questions you may have!
      </p>
    </div>
    <ContactForm />
    <div>
      <p>You can also call us here</p>
      <h3 className="fontMain">+1 (234) 567-8910</h3>
      <br />
      <p>or book a consultation @</p>
      <h3 className="fontMain">calendly.com/ourname</h3>
    </div>
    <img src={imgContact} alt="" />
  </div>
);

const ContactForm = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Control type="text" placeholder="Subject" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Control type="text" placeholder="Message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        SEND
      </Button>
    </Form>

    // <form action="">
    //   <input type="email" id="email" placeholder="Email" />
    //   <input type="text" id="subject" placeholder="Subject" />
    //   <input type="text" id="message" placeholder="Message" />
    //   <input type="submit" value="SEND" />
    // </form>
  );
};

AppContactUs.propTypes = {};

AppContactUs.defaultProps = {};

export default AppContactUs;
