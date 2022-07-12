import React from "react";
import PropTypes from "prop-types";
import styles from "./AppServices.module.css";
import imgServices1 from "../Images/img-personal-website.svg";
import imgServices2 from "../Images/img-site-content.svg";
import imgServices3 from "../Images/img-static-website.svg";

const AppServices = () => (
  <div id="whatWeDo"
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
    </div>
  </div>
);

AppServices.propTypes = {};

AppServices.defaultProps = {};

export default AppServices;
