import React from "react";
import PropTypes from "prop-types";
import styles from "./AppContactUs.module.css";
import imgContact from "../Images/img-personal-email.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AppContactUs = () => (
  <div
    className={styles.AppContactUs + " text-center"}
    data-testid="AppContactUs"
  >
    <h1 className="fontMain fontColorMain">CONTACT US</h1>
    <div className="row">
      <div className="col-3 d-flex align-self-end">
        <img src={imgContact} alt="" className="img-fluid" />
      </div>
      <div className="col-6 d-flex flex-column align-items-center">
        <div className="mb-3">
          <p>
            Please feel free to get in touch using the form below. We'd love to
            hear your thoughts and answer any questions you may have!
          </p>
        </div>
        <ContactForm />
        <div className="mt-5">
          <span>You can also call us here</span>
          <h5 className="fontMain">+1 (234) 567-8910</h5>
          <br />
          <span>or book a consultation @</span>
          <h5 className="fontMain">calendly.com/ourname</h5>
        </div>
      </div>
    </div>
  </div>
);

const ContactForm = () => {
  return (
    <Form className="container">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          className={styles.input}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSubject">
        <Form.Control
          type="text"
          placeholder="Subject"
          className={styles.input}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Control
          as="textarea"
          placeholder="Leave a message here"
          style={{ height: "150px" }}
          className={styles.input}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        SEND
      </Button>
    </Form>
  );
};

AppContactUs.propTypes = {};

AppContactUs.defaultProps = {};

export default AppContactUs;
