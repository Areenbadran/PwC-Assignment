const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./routes/route");
const cors = require("cors");
const app = express();
const connection = require("./models/db");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const saltRounds = 10;
const bcrypt = require("bcrypt");
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const jwt = require('jsonwebtoken');


app.use(cors());

app.use("/", router.router);

app.get("/", function (req, res) {
  res.send("Home Page");
});


/* *************  Authentication - Create new user ************ */
app.post("/signup", (req, res) => {
  const username =  req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const phoneNumber = req.body.phoneNumber;
  const userType = req.body.userType;
  //Hashing the password 
 bcrypt.hash(password, saltRounds, (err, hash) => {
   if (err) {
     console.log(err);
   }
   //Check if the email already exist in the user database.
    if (email) {
     connection.query('SELECT * FROM user WHERE email = ?', [email], (error, results) => {
       if (results.length > 0) {
         res.status(402).send({message: "email already exist"});
       } else {
         connection.query(
           "INSERT INTO user (username, email, password, phoneNumber, userType) VALUES (?,?,?,?,?)",
           [username, email, hash, phoneNumber, userType],
           (err, result) => {
             if (err) {
               console.log("error: ", err);
             } else {
               console.log(result);
             }
             console.log("created user: ", { username: username });
             // console.log(result);
             // result(null, { username: res.username });
             res.send({message: "user saved to db"});
           }
         );
       }
     })
   }
 });
});


/* ************* User - Signin *************** */
app.post("/signin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const userType = req.body.userType;
  const id = req.body.id;
  //Check if user's email exist in the database
  connection.query("SELECT * FROM user WHERE email = ?;", email, (err, result) => {
     if (err) {
    res.send({ err: err });
    }
     if (result.length > 0) {
       console.log(result);
       //check the bycrypted password
      bcrypt.compare(password, result[0].password, (error, response) => {
      if (response && userType === result[0].userType) {
           req.body.id = result[0].user_id  //comment this
           //Create the token
          const token = jwt.sign({id}, process.env.SECRET_TOKEN);
         console.log("signed user: ", {token: token});
        res.json({auth:true, token: token, result: result});
        }
        else {
        res.status(401).json({auth:false, message:'password is incorrect'});
             }
          });
        }
        else {
          res.status(401).json({auth:false, message:'email is incorrect'});
          }
        }
      );
    });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. http://localhost:3000/`);
});