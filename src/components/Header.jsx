import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

const Header = () => {
   return (
	  <div className="container">
		 <Navbar className="yellotail justify-content-center">
			<LinkContainer to="/">
			   <Navbar.Brand style={{margin: "0 auto"}}>The daily news</Navbar.Brand>
			</LinkContainer>
		 </Navbar>
		 <Nav className="justify-content-center">
			<Nav.Item><LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer></Nav.Item>
			<Nav.Item><LinkContainer to="contact"><Nav.Link>Contact</Nav.Link></LinkContainer></Nav.Item>
		 </Nav>
	  </div>
   );
};

export default Header;
