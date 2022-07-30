let express = require("express");
let route = express.Router();
const posgreutility = require("../utilities/postgresutility");
const validator = require('../utilities/validation');

route.post("/", (req, res) => {
 try{
    validator.validateEmployee(req.body,async function (data) {
        console.log("Employe Creation",data);
        let { firstname, lastname, department } = data;
        let date = new Date(Date.now());
        let formattedDate = date;
        let result = await posgreutility.addEmployee({
          firstname: firstname,
          lastname: lastname,
          department: department,
          joinat: formattedDate,
        });
        if (result) {
          res.status(200).send({ message: "Employee created success", result });
        } else {
          res.status(400).send({ message: "Something went wrong" });
        }
      });
 } catch(error){
    res.status(400).send({ message: error });
 }  

});

route.get("/", async(req, res) => {
  let { startDate, endDate, department } = req.query;
  startDate = new Date(startDate);
  endDate = new Date(endDate);
  let result =await posgreutility.selectEmployee(startDate, endDate, department);
  res.send({ result: result });
});
module.exports = route;
