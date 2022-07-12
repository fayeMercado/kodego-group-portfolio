import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";

const Header = () => {
	return (
		<div>
			<h1>This is the header</h1>
			<p>This is a sample paragraph</p>
			<ReactBootstrap.Button variant="primary">
				Primary
			</ReactBootstrap.Button>{" "}
		</div>
	);
};

export default Header;
