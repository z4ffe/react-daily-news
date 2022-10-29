import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import PostComponent from "../Posts";
import Header from "../Header/Header";
import MainLayout from "../../layouts/MainLayout";

const Router = () => {
   return (
	  <BrowserRouter>
		 <Header/>
		 <MainLayout>
			<Routes>
			   <Route path="/" element={<Home/>}></Route>
			   <Route path="contact" element={<Contact/>}></Route>
			   <Route path="article/:id" element={<PostComponent/>}></Route>
			   <Route path="*" element={<Home/>}></Route>
			</Routes>
		 </MainLayout>
	  </BrowserRouter>
   );
};

export default Router;
