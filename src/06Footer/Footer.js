import React from "react";
import "./Footers.css";
import linkedin from "../Images/ico-linkedin.svg";
import github from "../Images/ico-github.svg";
import twitter from "../Images/ico-twitter.svg";
import google from "../Images/ico-google.svg";
import logo from "../Images/logo-bbg.svg";

const Footer = () => {
  return (
    <footer className="w-100 py-4 flex-shrink-0">
      <div className="container py-4">
        <div className="row gy-4 gx-5 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <p className="fontMain fontColorMain text-center">
              FOLLOW US FOR MORE UPDATES
            </p>
            <div className="d-flex justify-content-center">
              <a className="footer--icon" href="#">
                <img src={google} alt="google" height="50px" />
              </a>
              <a className="footer--icon" href="#">
                <img src={github} alt="github" height="50px" />
              </a>
              <a className="footer--icon" href="#">
                <img src={linkedin} alt="linkedin" height="50px" />
              </a>
              <a className="footer--icon" href="#">
                <img src={twitter} alt="twitter" height="50px" />
              </a>
            </div>
            <div className="d-flex mt-5 mb-3 justify-content-center">
              <img src={logo} alt="" height="75px" />
              {/* <h3 class="fw-bold me-2 px-3 footer--logo_text"> CS </h3>
              <h3 className="footer--dev">Devs</h3> */}
            </div>
            {/* <p className="small text-muted text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt.
            </p> */}
            <p className="small text-muted mb-0">
              &copy; Copyrights. All rights reserved.{" "}
              <span className="text-primary">CAREERSHIFTERS.DEV</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
