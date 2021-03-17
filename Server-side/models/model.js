var connection = require("./db");

module.exports = {

    //Adding a complaint
  addComplaint: (complaint, callback) => {
    var queryStr = "Insert into complaint (title, gender, comment, status, userID) values (?,?,?,?,?)";
    connection.query(queryStr, complaint, function (err, result) {
      callback(err, result);
      console.log("error", err);
    });
  },

    //Get all complaints for the Admin
    getAllComplaints: (callback) => {
        var queryStr = "SELECT * FROM complaint";
        connection.query(queryStr, function (err, result) {
          callback(err, result);
          console.log("error", err);
        });
      },

    //Get all complaints for the Admin
    getUserComplaints: (complaint, callback) => {
        console.log(complaint + " here");
        var queryStr = `select * from complaint where userID = '${complaint}' `;
        connection.query(queryStr, complaint, function (err, result) {
          callback(err, result);
          console.log("error", err);
        });
      },

      //Change the status of a complaint from admin side
      actions: (complaint, callback) => {
        console.log(complaint + "there");
        var queryStr = `UPDATE complaint SET status = '${complaint[1]}' WHERE complaint_id = '${complaint[0]}'`;
        connection.query(queryStr, function (err, result) {
          callback(err, result);
          console.log("error", err);
        });
      },


}