import React, { Component } from "react";
import $ from 'jquery';
import Background from '../images/abc-5083097_1281.jpg';
import logo from "../images/logo2.png";

export default class AddComplaint extends Component {

    constructor() {
        super();
        this.state = {
            title: '',
            gender: '',
            comment: '',
            status: 'Pending',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeComment = this.handleChangeComment.bind(this);
      }

      handleChangeTitle(event) {
          this.setState({
            title: event.target.value,
          })
      }
      handleChangeGender(event) {
        this.setState({
         gender: event.target.value,
        })
    }
    handleChangeComment(event) {
        this.setState({
          comment: event.target.value,
        })
    }
 


      handleSubmit(event) {
          event.preventDefault();
          console.log(this.state.title);

          $.ajax({
            method: 'POST',
            url:'http://localhost:3000/addComplaint',
            data : JSON.stringify({
            title: this.state.title,
            gender: this.state.gender,
            comment: this.state.comment,
            status: this.state.status,
            userID: localStorage.getItem('id'),
            }),
            contentType: "application/json",
            success: function(data){
              console.log('success')
            },
            error: function(err){
              console.log('error:' ,err)
            }
          });

          window.location = "/userComplaints";
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
               <button onClick={() => {localStorage.removeItem('token'); localStorage.removeItem('id'); localStorage.removeItem('user'); window.location=('/')}}  style={{color:"white"}} className="btn btn-outline-primary"> Sign out </button>
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
          <a href="/userComplaints" style={{color:"white"}}> All Complaints </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </div>
      </div>
    </div>
    

        <div>
<div class="signup-form">
    <form>
		<h2>Complaint</h2>
        <div class="form-group">
			<div class="row">
				<div class="col">
                    <label for="user">Title:</label>&nbsp;&nbsp;
                    <div class="col"><input type="text" class="form-control" placeholder="Title" required={true}  value = {this.state.title} onChange= {this.handleChangeTitle}/></div>
                </div>
			</div>        	
        </div>

        <div class="form-group">
			<div class="row">
				<div class="col">
                    <label for="user">Choose gender:</label>&nbsp;&nbsp;

                    <select name="user" className="user" onChange= {this.handleChangeGender}>
                    <option value = "">---</option>
                    <option value = "female" >Female</option>
                    <option value = "male" >Male</option>
                    </select>
                </div>
			</div>        	
      </div>

        <div class="form-group">
		    	<div class="row">
            <label for="user">Comment:</label>&nbsp;&nbsp;
				<div class="col"><textarea type="text" class="form-control" placeholder="Comment" required={true}  value = {this.state.comment} onChange= {this.handleChangeComment}/></div>
			</div>        	
    </div>
        
		<div class="form-group">
            <button type="submit" onClick= {this.handleSubmit} class="btn btn-primary btn-lg btn-block">Send</button><br/>
        </div>
    </form>

</div>
</div>

        </div>
    )

 }
}


