let express = require("express");
let route = express.Router();
const posgreutility = require("../utilities/postgresutility");

route.get("/",async (req, res) => {
  let result = await posgreutility.listDepartment();
  res.send({ result: result });
});

module.exports = route;
