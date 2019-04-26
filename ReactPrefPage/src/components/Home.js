import React, { Component } from 'react';
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/scss/bootstrap.scss';
//import './App.css';

class Home extends Component {


    render() {
      return (
    
    <div className="Content">   
    <header className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="text-center">Three Day Weekend</h1>
          <h2 className="text-50 mx-auto mt-2 mb-5">Perfectly Curated Three Day Weekend Itineraries</h2>
          
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
    </footer>
  
    
    
    </div>
    
        
        
          
      
        );
    }
  }
  
  export default Home;
  