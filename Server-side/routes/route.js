var router = require("express").Router();
var controller = require("../controllers/controller");

router.post("/addComplaint", controller.addComplaint);

router.get("/getAllComplaints", controller.getAllComplaints);

router.get("/getUserComplaints/:id", controller.getUserComplaints);

router.post("/status", controller.actions);


module.exports.router = router;