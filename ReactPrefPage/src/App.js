import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';
import {Route, NavLink, HashRouter} from "react-router-dom";
//import { BrowserRouter, Router, Switch, Route, Link } from 'react-router-dom';
import Preferences from './components/Preferences';
import Home from './components/Home';
import logo from './logo.png';
import logoWhite from './components/img/LogoWhite.png';
import user from "./user.svg";
import home from "./home.svg";
import './App.css';


class App extends Component {


  render() {
    return (
      
    <HashRouter>
    <div id = "home" className="App" >
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        {/* <img className="logopad" src={logoWhite} alt="Logo" /> */}
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top"></a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" className="nav-link js-scroll-trigger" className="brutefont">
               <a className="nav-link js-scroll-trigger" href="#home"> <NavLink to="/">Home {"   "}</NavLink></a>    
            </li>
            {/* <li className="nav-item" className="brutefont">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#signup">Contact</a>
            </li> 
           */}
          </ul>
        </div>      
      </nav>

  <div className="Content"> 
  <Route exact path="/" component={Home}/>
  <Route path="/preferences" component={Preferences}/>
            

  {/* <header className="masthead">
    <div className="container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <h1 className="text-center">Three Day Weekend</h1>
        <h2 className="text-50 mx-auto mt-2 mb-5">Perfectly Curated Three Day Weekend Itineraries</h2>
        <BrowserRouter>
              <Route exact path='/' component={Preferences} />  
              <Route path='/preferences' component={Preferences} />  
        </BrowserRouter>
        

      
      </div>
    </div>
  </header>
  <section id="about" className="about-section text-center">
      <div classNamr="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">What We Do</h2>
            <p className="text-white-50">A typical traveler spend more than four hours planning a weekend in a new city. Not anymore! We make sense of the travel review site chaos. 3DW generates carefully curated hour-by-hour itineraries with expert insights. The best hotels, restaurants, bars and things to do in one itinerary!
              </p>
              
          </div>
      
      <div className="container">
        <div className = "row">
        <div className= "col-lg-4 mx-auto">
          <h3 className="text-white mb-4"> Where to Stay</h3>
          <img src='img/hotel.jpg' className='img-fluid' alt=""/>

          <p className="text-white-50">The highest ranked hotels that work best for your trip. Hotels selected for both location and quality.</p>
         
        </div>
  
         <div className= "col-lg-4 mx-auto">
          <h3 className="text-white mb-4"> Eat and Drink</h3>
          <img src='img/food.jpeg' className='img-fluid' alt=""/>
          <br></br>
          <p className="text-white-50">Handpicked restaurants and bars just for you. The best restaurants optimized for your location.</p>
        </div>
  
         <div className= "col-lg-4 mx-auto">
          <h3 className="text-white mb-4"> Activities </h3>
          <img src="./img/activity.jpg" className="img-fluid" alt=""/>
          <br></br>
          <p className="text-white-50">Recommendations of the best things to do in a city provided by local experts</p>
        </div>
        </div>
        </div>
        </div>
        </div>
    </section>

   <section id="signup" className="signup-section">
    <div className="container">
      <div className="row">
        <div className="col-md-10 col-lg-8 mx-auto text-center">

          <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
          <h2 className="text-white mb-5">Subscribe to receive weekly itineraries!</h2>

          <form className="form-inline d-flex">
            <input type="email" className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0" id="inputEmail" placeholder="Enter email address..."/>
            <button type="submit" className="btn btn-primary mx-auto">Subscribe</button>
          </form>


        </div>
      </div>
    </div>
  </section> 

  <footer className="bg-black small text-center text-white-50">
    <div className="container">
      Copyright &copy; The Three Day Weekend 2019
    </div>
  </footer> */}

  
  
  </div>
  </div>
  </HashRouter>
    );
  }
}

export default App;
