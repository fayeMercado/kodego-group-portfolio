import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image } from "react-bootstrap";
import styles from "./AboutUs.module.css";
import imgAbout from "../Images/img-team-spirit.svg";

const AboutUs = () => {
  return (
    <div id="aboutUs" className={styles.AboutUs}>
      <Container>
        <div className={styles.div_about}>
          <Image className={styles.imgAbout} src={imgAbout} alt="" />
        </div>

        <div className="text-center mt-5">
          <h1 className="my-3 fontMain fontColorMain">ABOUT US</h1>
          <p className="mb-5">
            We came from different walks of life. One of us is an architect, the
            other is an accountant, and the last one is an engineer. We like to
            call ourselves, a self-taught developers. Our diverse background
            gave us an advantage in dealing with problems. Each problem in your
            business is unique. Coming from wide experiences, one of us will be
            able to relate how that problem affects your business, and in return
            we can offer you solutions that are out of the box.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
