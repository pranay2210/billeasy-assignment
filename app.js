const express = require("express");
const app = express();
const employee = require("./route/employee");
const department = require("./route/department");

app.use(express.json());
app.use("/employee", employee);
app.use("/department", department);
app.get('/',(req,res)=>{
    res.send('Welcome to Bill Easy Assignment');
});
app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on port ${process.env.PORT || 3000}`)
);
