import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Preferences from './components/Preferences';
import logo from './logo.png';
import logoWhite from './LogoWhite.png';
import './App.css';
import user from "./user.svg";
import home from "./home.svg";



class App extends Component {


  render() {
    return (
    <div className="App">
      
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <img className="logopad" src={"img/LogoWhite.png"} alt="Logo" />
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="#page-top"></a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars"></i>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item" className="brutefont">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#signup">Contact</a>
            </li>
          </ul>
        </div>
        
      </nav>
  


  <header className="masthead">
    <div className="container d-flex h-100 align-items-center">
      <div className="mx-auto text-center">
        <h1 className="text-center">Three Day Weekend</h1>
        <h2 className="text-50 mx-auto mt-2 mb-5">Perfectly Curated Three Day Weekend Itineraries</h2>
       
        <Router>
        <Link to={'./preferences'} className="nav-link">Build a personal itinerary</Link>
        
        </Router>
      </div>
    </div>
  </header>

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
  </footer>



      </div>);
  }
}

export default App;
