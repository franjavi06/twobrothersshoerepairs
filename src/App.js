import React from 'react';
import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
//import './App.css';
/* CSS */

import './assets/fonts/icomoon/style.css';
import './assets/fonts/flaticon/font/flaticon.css';

import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './assets/css/jquery-ui.css'

/* 
import './assets/css/bootstrap.min.css';----------
;
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/bootstrap-datepicker.css';
import './assets/css/aos.css'; -------------------
*/

import TopBar from './components/Topbar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct';
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './pages/Error'





function App() {
  return (
    <>
    <div className="site-wrap">
      <TopBar></TopBar>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/products/" component={Products}/>
        <Route exact path="/products/:productid" component={SingleProduct}/>
        <Route exact path="/about/" component={About}/>
        <Route exact path="/contact/" component={Contact}/>
        <Route component={Error}/>
      </Switch>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
