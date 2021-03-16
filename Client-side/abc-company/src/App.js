import React , {useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/home";
import Signup from "./components/signup";
import Signin from "./components/signin";
import AddComplaint from "./components/addComplaint";
import UserComplaints from "./components/userComplaints";
import AdminComplaints from "./components/adminComplaints";
// import logo from './logo.svg';

function App() {
  const id = localStorage.getItem('id');
  return (
    <div>
    <Router className="container">

    <div>
      <Route path="/" exact component={Home} />
      <Route path="/signup" exact component={Signup}/>
      <Route path="/signin" exact component={Signin}/>
      <Route path="/addComplaint" component={AddComplaint}/>
      <Route path="/userComplaints" component={UserComplaints}/>
      <Route path="/getAllComplaints" component={AdminComplaints}/>
    </div>

  </Router>
</div>
  );
}

export default App;


/* 
 <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>
*/