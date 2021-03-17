const express = require("express");
var model = require("../models/model");


module.exports = {

    //Adding a new complaint from authorized customer
    addComplaint: (req, res) => {
        var complaint = [req.body.title, req.body.gender, req.body.comment, req.body.status, req.body.userID];
        model.addComplaint(complaint, function (err, results) {
          if (err) {
            console.log("error in adding a complaint in controller", err);
          }
          console.log("Controller");
          res.json(results);
        });
      },

      //Get all complaints for the Admin
      getAllComplaints: (req, res) => {
        model.getAllComplaints(function (err, results) {
          if (err) {
            console.log("error in getting complaint for admin - controller", err);
          }
          console.log("Controller-");
          res.json(results);
        });
      },

        //Get all user's complaints 
        getUserComplaints: (req, res) => {
            var complaint = req.params.id;
            model.getUserComplaints(complaint, function (err, result) {
            if (err) {
                console.log("error in getting complaint for user - controller", err);
            }
            console.log("Controller");
            res.json(result);
            });
        },

          //Edit user's status complaint 
          actions: (req, res) => {
            var complaint = [req.body.complaint_id, req.body.status];
            model.actions(complaint, function (err, result) {
            if (err) {
                console.log("error in change complaint's status - controller", err);
            }
            console.log("Controller");
            res.json(result);
            });
        },
        

};