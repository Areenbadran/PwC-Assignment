import React, { Component } from "react";
import $ from 'jquery';
import logo from "../images/logo2.png";

export default class UserComplaints extends Component {

    constructor() {
        super();
        this.state = {
          complaints: [],
        }
      }

      componentDidMount() {
        var that = this;
         $.ajax({
           method: 'GET',
           url:"http://localhost:3000/getAllComplaints",
           contentType: "application/json",
           success: function(data){
             console.log('success in get user complaints', data);
             that.setState({
                 complaints: data
             })
           },
           error: function(err){
             console.log('error:' ,err)
           }
         });
     }


      acceptAction(e) {
          console.log(e);
        $.ajax({
          method: 'POST',
          url:'http://localhost:3000/status',
          data : JSON.stringify({
          complaint_id: e,
          status: "Accepted",
          }),
          contentType: "application/json",
          success: function(data){
            console.log('success');
          },
          error: function(err){
            console.log('error:' ,err)
          }
        });
        window.location = "/getAllComplaints";
      }

      rejectAction(e) {
        console.log(e);
      $.ajax({
        method: 'POST',
        url:'http://localhost:3000/status',
        data : JSON.stringify({
        complaint_id: e,
        status: "Rejected",
        }),
        contentType: "application/json",
        success: function(data){
          console.log('success');
        },
        error: function(err){
          console.log('error:' ,err)
        }
      });
      window.location = "/getAllComplaints";
    }


     
  

 
    render() {
    return (
      <div>

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
               <button onClick={() => {localStorage.removeItem('token'); localStorage.removeItem('id');localStorage.removeItem('user'); window.location=('/')}}  style={{color:"white"}} className="btn btn-outline-primary"> Sign out </button>
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
        <table className = "table" >
               <thead className = "thead">
                   <tr>
                       <th>Title</th>
                       <th>Gender</th>
                       <th>Comment</th>
                       <th>Status</th>
                   </tr>
               </thead>
               <tbody >                                 
                    
                  {this.state.complaints.map((complaint) => (
                     <tr key = {complaint.complaint_id}>

                     <td>{complaint.title}</td>
                     <td >{complaint.gender}</td>
                     <td>{complaint.comment}</td>
                     <td>{complaint.status}</td>
                     <td><button type="button" className="btn btn-outline-primary btn-lg" onClick= {() => this.acceptAction(complaint.complaint_id)}>Accept</button></td>
                     <td><button className="btn btn-outline-primary btn-lg" onClick= {() => this.rejectAction(complaint.complaint_id)}>Reject</button></td>
                     

                   </tr>
          ))}  
              </tbody>
               </table>

       </div>

        </div>
    )
    }
}


