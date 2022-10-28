import React from 'react';
import {Container} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

const MainLayout = (props) => {
   return (
	  <Container className="mt-5 mb-5">
		 {props.children}
		 <ToastContainer limit={1}/>
	  </Container>
   );
};

export default MainLayout;
