import React, { Component } from "react";
import $ from 'jquery';
import swal from 'sweetalert';
import Background from '../images/abc-5083097_1281.jpg';
import logo from "../images/logo2.png";



export default class Signup extends Component {
 
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
      }
 
        handleChangeEmail(event) {
            this.setState({
            email: event.target.value,
            })
        }

        handleChangePassword(event) {
            this.setState({
                password: event.target.value,
            })
        }


       //Sign in button
       
      handleSubmit(event) {
          var that = this;
        event.preventDefault();
        console.log(this.state.email);

        $.ajax({
          method: 'POST',
          url:'http://localhost:3000/signin',
          data : JSON.stringify({
          email: this.state.email,
          password: this.state.password,
          }),
          contentType: "application/json",
          success: function(data){
            console.log('data', data);
            localStorage.setItem ("token" ,data.token);
            localStorage.setItem ("id" ,data.result[0].user_id);
            window.location = '/addComplaint';
          },
          error: function(err){
            console.log("error");
             if (!that.state.email || !that.state.password) {
              swal({
                title: "email or password is empty",
                text: "Please fill all the fields",
                icon: "info",
                button: "Ok",
              });
            }
            else {   
              swal({
              title: "email or password is incorrect",
              text: "Fill a valid email or password",
              icon: "error",
              button: "Ok",
            });
          };
          }
        });

    }

  render() {
    return (
  <div style={{background: `url(${Background})`, width:"100%",height:"1000px",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>

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
    <div class="signup-form">
        <form>
            <h2>Log in</h2>
            <div class="form-group">
            <i class="fa fa-user"> Email </i>
                <input type="email" class="form-control"  required={true} value = {this.state.email} onChange = {this.handleChangeEmail}/>
            
            </div>
            <div class="form-group">
              <i class="fa fa-lock"> Password </i>
                <input type="password" class="form-control"   required={true}  value = {this.state.password} onChange = {this.handleChangePassword}/>
            </div>
            <div class="form-group">
                <button type="submit" onClick= {this.handleSubmit} class="btn btn-primary btn-lg btn-block">Log in</button><br/>
                <div class="text-center">Don't have an account? <a href="/signup">Sign up</a></div>
              </div>
          </form>
        </div>
    </div>

        </div>
    )
  }
}

























