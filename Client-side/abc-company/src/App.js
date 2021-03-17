import React , {useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Signup from "./components/signup";
import Signin from "./components/signin";
import AddComplaint from "./components/addComplaint";
import UserComplaints from "./components/userComplaints";
import AdminComplaints from "./components/adminComplaints";
import ProtectedCustomer from './ProtectedCustomer';
import ProtectedAdmin from './ProtectedAdmin';

function App() {
  const token = localStorage.getItem('token');
  const user =  localStorage.getItem('user');
 

  return (
    <div>
    <Router className="container">

    <div>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup}/>
      <Route path="/signin" exact component={Signin}/>
      <ProtectedCustomer path="/addComplaint" component={AddComplaint} token={token} user={user}/>
      <ProtectedCustomer path="/userComplaints" component={UserComplaints} token={token} user={user}/>
      <ProtectedAdmin path="/getAllComplaints" component={AdminComplaints} token={token} user={user}/>
    </div>

  </Router>
</div>
  );
}

export default App;

