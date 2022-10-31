import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Contact from "../Contact/Contact";
import PostComponent from "../Posts/Posts";
import Header from "../Header/Header";
import MainLayout from "../../layouts/MainLayout";
import Footer from "../Footer/Footer";

const Router = () => {
   return (
	  <HashRouter>
		 <Header/>
		 <MainLayout>
			<Routes>
			   <Route path="/" element={<Home/>}></Route>
			   <Route path="contact" element={<Contact/>}></Route>
			   <Route path="article/:id" element={<PostComponent/>}></Route>
			   <Route path="*" element={<Home/>}></Route>
			</Routes>
			<Footer/>
		 </MainLayout>
	  </HashRouter>
   );
};

export default Router;
