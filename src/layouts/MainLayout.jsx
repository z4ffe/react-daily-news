import React from 'react';
import {Container} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = (props) => {
   return (
	  <Container className="p-0 pt-2 main-container">
		 {props.children}
		 <ToastContainer limit={1}/>
	  </Container>
   );
};

export default MainLayout;
