var router = require("express").Router();
var controller = require("../controllers/controller");

router.post("/addComplaint", controller.addComplaint);

router.get("/getAllComplaints", controller.getAllComplaints);

router.get("/getUserComplaints/:id", controller.getUserComplaints);




module.exports.router = router;