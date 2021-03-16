import React, { Component } from "react";
import logo from "../images/logo2.png";
import background from "../images/abc-5083097_1281.jpg";



export default class Home extends Component {
  render() {
    return (
      <div style={{background: `url(${background})`,width:"100%",height:"1000px",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

        <div>
      <div className="collapse bg-dark" id="navbarHeader">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">ABC&copy; solves clients' toughest challenges by providing unmatched services in strategy & consulting, interactive, technology and operations.
              Our purpose: To deliver on the promise of technology and human ingenuity. We embrace the power of change to create 360° value for our clients, people and communities.</p>
            </div>
            
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
               <a href="https://m.facebook.com/" className="text-white" class="contact" style={{color:"rgba(30, 139, 195, 1)"}}><i class="fab fa-facebook-f fa-1x"></i></a>&nbsp;&nbsp;
               <a href="https://twitter.com/?lang=en" className="text-white" class="contact" style={{color:"rgba(30, 139, 195, 1)"}}><i class="fab fa-twitter fa-1x"></i></a>&nbsp;&nbsp;
               <a href="https://www.youtube.com/" className="text-white" class="contact" style={{color:"rgba(30, 139, 195, 1)"}}><i class="fab fa-youtube fa-1x"></i></a>&nbsp;&nbsp;
               <a href="https://mail.google.com/" className="text-white" class="contact" style={{color:"rgba(30, 139, 195, 1)"}}><i class="fas fa-envelope fa-1x"></i></a>&nbsp;&nbsp;
               <a href="https://www.instagram.com/" className="text-white" class="contact" style={{color:"rgba(30, 139, 195, 1)"}}><i class="fab fa-instagram fa-1x"></i></a><br/><br/>
               <a href="/signup" className="btn btn-outline-primary btn-lg" style={{color:"white"}}>Sign Up</a>&nbsp;&nbsp;
               <a href="/signin" className="btn btn-outline-primary btn-lg" style={{color:"white"}}>Sign In</a>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar navbar-dark bg-dark box-shadow">
        <div className="container d-flex justify-content-between">
          <a href="/" className="navbar-brand d-flex align-items-center">
            <img src={logo} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"></img>
            <strong>ABC Company</strong>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>
    

  <div>
        <div className="container" style={{textAlign:"center",marginTop:"700px"}}>
          <p className="lead "  style={{color:"white",fontSize:"30px",fontFamily:"Lucida Console"}}> We embrace the power of change to create 360° value for our clients, people and communities.</p>
          <p>
            <a href="/signup" className="btn btn-outline-primary btn-lg">Sign Up</a>&nbsp;&nbsp;
            <a href="/signin" className="btn btn-outline-primary btn-lg">Sign In</a>
          </p>

        </div>
    </div>

      </div>
    );
  }
}
