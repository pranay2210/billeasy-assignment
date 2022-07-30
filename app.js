const express = require("express");
const app = express();
const employee = require("./route/employee");
const department = require("./route/department");

app.use(express.json());
app.use("/employee", employee);
app.use("/department", department);

app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on port ${process.env.PORT || 3000}`)
);
