import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router/Router';
import './styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
	  <Router/>
   </Provider>
);
