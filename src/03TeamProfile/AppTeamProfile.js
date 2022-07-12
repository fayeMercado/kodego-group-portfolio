import React from "react";
import PropTypes from "prop-types";
import styles from "./AppTeamProfile.module.css";
import linkedin from "../Images/ico-linkedin.svg";
import github from "../Images/ico-github.svg";

const AppTeamProfile = (props) => (
  <div
    className={styles.AppTeamProfile + " text-center"}
    data-testid="AppTeamProfile"
  >
    <h1 className="fontMain fontColorMain mb-5">MEET THE TEAM</h1>
    <div className="row">{props.children}</div>
  </div>
);

export const MemberProfile = (props) => (
  <div className="col d-flex flex-column align-items-center justify-content-between px-5">
    <div className="p-0">
      <div className="container w-75">
        <img
          src={props.imgSrc}
          alt=""
          className={styles.profilePhoto + " p-3 img-fluid mb-3"}
        />
      </div>
      <h3 className="fontMain">{props.firstName}</h3>
      <div className={styles.surname + " container-fluid w-75 mb-3"}>
        <span>{props.lastName}</span>
      </div>
      <p>{props.description}</p>
      <h5 className="fontMain fontColorMain">LIKES...</h5>
      <p>{props.likes}</p>
    </div>
    <div className="d-flex text-center gap-3">
      <a href="">
        <img src={linkedin} alt="linkedin" height="50px" />
      </a>
      <a href="">
        <img src={github} alt="github" height="50px" />
      </a>
    </div>
  </div>
);

AppTeamProfile.propTypes = {};

AppTeamProfile.defaultProps = {};

export default AppTeamProfile;
