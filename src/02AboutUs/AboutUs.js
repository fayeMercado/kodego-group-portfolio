import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import styles from "./AboutUs.module.css";
import imgAbout from "../Images/img-team-spirit.svg";

const AboutUs = () => {
	return (
		<Container>
			<Row>
				<Col>
					<div className={styles.div_about}>
						<Image className={styles.imgAbout} src={imgAbout} alt="" />
					</div>
				</Col>
			</Row>
			<Row>
				<Col>
					<div className={styles.div_about_title}>
						<h1>ABOUT US</h1>
						<p>
							We came from different walks of life. One of us is an architect,
							the other is an accountant, and the last one is an engineer. We
							like to call ourselves, a self-taught developers. Our diverse
							background gave us an advantage in dealing with problems. Each
							problem in your business is unique. Coming from wide experiences,
							one of us will be able to relate how that problem affects your
							business, and in return we can offer you solutions that are out of
							the box.{" "}
						</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutUs;
