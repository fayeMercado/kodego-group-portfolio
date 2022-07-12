import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import styles from "./Header.module.css";
import imgHeader from "../Images/img-building-websites.svg";

const Header = () => {
	return (
		<Container>
			<Row>
				<Col className={styles.div_1}>
					<Image className={styles.imgHeader} src={imgHeader} alt="" />
				</Col>
				<Col className={styles.div_1}>
					<h1 className={styles.heading_1}>Full Stack Developers</h1>
					<p className={styles.para_1}>
						We love tinkering the ins and outs of the web. <br /> Frontend,
						backend, we got you covered.
					</p>
				</Col>
			</Row>
			<Button className={styles.button_1}>Contact Us</Button>
		</Container>
	);
};

export default Header;
