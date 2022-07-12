import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import styles from "./Home.module.css";
import imgHeader from "../Images/img-building-websites.svg";

const Home = () => {
  return (
    <div id="home"
      className={
        styles.Home + " d-flex align-self-center justify-content-center"
      }
    >
      <Container>
        <Row>
          <Col className={styles.div_1}>
            <Image className={styles.imgHeader} src={imgHeader} alt="" />
          </Col>
          <Col className={styles.div_1}>
            <h1 className={styles.heading_1 + " fontMain fontColorMain"}>
              Full Stack Developers
            </h1>
            <p className={styles.para_1}>
              We love tinkering the ins and outs of the web. <br /> Frontend,
              backend, we got you covered.
            </p>
          </Col>
        </Row>
        <Button className={styles.button_1}>GET STARTED</Button>
      </Container>
    </div>
  );
};

export default Home;
