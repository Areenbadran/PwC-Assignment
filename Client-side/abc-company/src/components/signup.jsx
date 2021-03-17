import React, { Component } from "react";
import $ from 'jquery';
import swal from 'sweetalert';
import Background from '../images/abc-5083097_1281.jpg';
import logo from "../images/logo2.png";


export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            phoneNumber: '',
            userType: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);

      }

      handleChangeUsername(event) {
          this.setState({
            username: event.target.value,
          })
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
    handleChangePhone(event) {
        this.setState({
          phoneNumber: event.target.value,
        })
    }
    handleChangeType(event) {
        this.setState({
          userType: event.target.value,
        })
    }


      handleSubmit(event) {
          event.preventDefault();
          console.log(this.state.userType);

         
          // FORM VALIDATION
         if (this.state.username.length === 0) {
            swal({
              title: "username is empty",
              text: "Please fill your username...",
              icon: "info",
              button: "Ok",
            });
          }
          if ( !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)) ) {
            swal({
              title: "Invalid Email",
              text: "Please enter a valid email address...",
              icon: "info",
              button: "Ok",
            });
          }
          //Input Password and Submit [8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character
          if ( !(/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,30}$/.test(this.state.password)) ) {
            swal({
              title: "Weak Password",
              text: "Password must contain at least 6 characters, including lowercase,numbers and special character...",
              icon: "info",
              button: "Ok",
            });
          }
          //Input PhoneNumber should be 10 digits with no comma, no spaces, no punctuation and there will be no + sign in front the number
          if ( !(/^\d{10}$/.test(this.state.phoneNumber)) ) {
            swal({
              title: "Invalid Phone Number",
              text: "Please enter a valid phone number...",
              icon: "info",
              button: "Ok",
            });
          }
          if ((/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.email)) && (/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,30}$/.test(this.state.password)) &&  (/^\d{10}$/.test(this.state.phoneNumber)) && this.state.username.length > 0) {


          $.ajax({
            method: 'POST',
            url:'http://localhost:3000/signup',
            data : JSON.stringify({
            username: this.state.username ,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber,
            userType: this.state.userType,
            }),
            contentType: "application/json",
            success: function(data){
              console.log('success')
            },
            error: function(err){
              console.log('error:' ,err)
            }
          });

          window.location = "/signin";
        }

      }
  

 
    render() {
    return (
      <div style={{background: `url(${Background})`}}>

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
		<h2>Register</h2>
		<p class="hint-text">Create your account. It's free and only takes a minute.</p>
        <div class="form-group">
			<div class="row">
				<div class="col">
                    <label for="user">Choose user type:</label>&nbsp;&nbsp;

                    <select name="user" className="user" onChange= {this.handleChangeType}>
                    <option value = "">---</option>
                    <option value = "admin" >Admin</option>
                    <option value = "customer" >Customer</option>
                    </select>

                </div>
			</div>        	
        </div>
        <div class="form-group">
			<div class="row">
				<div class="col"><input type="text" class="form-control" placeholder="Username" required={true}  value = {this.state.username} onChange= {this.handleChangeUsername}/></div>
			</div>        	
        </div>
        <div class="form-group">
        	<input type="email" class="form-control"  placeholder="Email" required={true}  value = {this.state.email} onChange = {this.handleChangeEmail}/>
        </div>
		<div class="form-group">
            <input type="password" class="form-control"  placeholder="Password" required={true} value = {this.state.password} onChange = {this.handleChangePassword}/>
        </div>
		<div class="form-group">
            <input type="tel" class="form-control" placeholder="Phone Number" required={true} value = {this.state.phoneNumber} onChange = {this.handleChangePhone}/>
        </div>  

        <div class="form-group">
			<label class="form-check-label"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		</div>

		<div class="form-group">
            <button type="submit" onClick= {this.handleSubmit} class="btn btn-primary btn-lg btn-block">Register Now</button><br/>
            <div class="text-center">Already have an account? <a href="/signin">Sign in</a></div>
        </div>
    </form>

</div>
</div>

        </div>
    )
    }
}


