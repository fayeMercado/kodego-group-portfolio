import React from "react";
import PropTypes from "prop-types";
import styles from "./AppServices.module.css";
import imgServices1 from "../Images/img-personal-website.svg";
import imgServices2 from "../Images/img-site-content.svg";
import imgServices3 from "../Images/img-static-website.svg";

const AppServices = () => (
  <div
    className={styles.AppServices + " text-center"}
    data-testid="AppServices"
  >
    <h1 className="fontMain fontColorMain mt-5">WHAT WE DO</h1>
    <div className="row h-50 my-5">
      <div className="col-4 d-flex align-self-start">
        <img src={imgServices1} alt="" className="img-fluid" />
      </div>
      <div className="col-4 d-flex align-self-end">
        <img src={imgServices2} alt="" className="img-fluid" />
      </div>
      <div className="col-4 d-flex align-self-start">
        <img src={imgServices3} alt="" className="img-fluid" />
      </div>
    </div>
    <div className="mb-3">
      <p>
        We build websites that convert visitors into customers. Our aim is to
        provide each client with the perfect website that fits their needs and
        wants. From creating a polished, professional appearance to providing
        the systems needed, we will ensure your business website meets or
        exceeds your expectations.
      </p>
      <p>
        Our services include any or all of the following: Creation of custom web
        site, Creation and customization of all graphics, User experience (UX)
        design, Website architecture and development, Database design and
        development.
      </p>
    </div>
  </div>
);

AppServices.propTypes = {};

AppServices.defaultProps = {};

export default AppServices;
