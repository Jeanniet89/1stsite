import React from "react";
import { Nav } from "react-bootstrap";

const NavBar = () => {
	return (
		<>
			<Nav className="justify-content-center" activeKey="/home">
				<Nav.Item>
					<Nav.Link href="/home">Home</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="link-1">Media</Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	);
};

export default NavBar;
