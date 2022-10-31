import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'
import logo from '../../image/logo.svg'

const Header = () => {
   return (
	  <div className="header-wrapper container">
		 <Navbar className="title justify-content-center">
			<LinkContainer to="/" className="logo-wrapper">
			   <Navbar.Brand><img src={logo} alt="" className="logo"/></Navbar.Brand>
			</LinkContainer>
		 </Navbar>
		 <Navbar variant="dark" className="justify-content-center p-0">
			<Nav className="justify-content-center">
			   <Nav.Item><LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer></Nav.Item>
			   <Nav.Item><LinkContainer to="contact"><Nav.Link>Contact</Nav.Link></LinkContainer></Nav.Item>
			</Nav>
		 </Navbar>
	  </div>
   );
};

export default Header;
