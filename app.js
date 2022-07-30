const express = require("express");
const app = express();
const employee = require("./route/employee");
const department = require("./route/department");

app.use(express.json());
app.use("/employee", employee);
app.use("/department", department);
app.get("/", (req, res) => {
  res.send("Welcome to Bill Easy Assignment");
});

app.get("/subset", (req, res) => {
  let arr = req.query.subset;
  let N = arr.length;
  let K = req.query.divisor;
  let result = require("./utilities/subset").subset(arr, N, K);
  res.status(200).send({ result: result });
});
app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on port ${process.env.PORT || 3000}`)
);
