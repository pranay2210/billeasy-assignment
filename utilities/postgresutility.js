const postgresdb = require("./postgrescon");

let addEmployee = async ({ firstname, lastname, department, joinat }) => {
  const employee = await postgresdb`
      insert into employee.employee
        (firstname, lastname, department, joinat)
      values
        (${firstname}, ${lastname}, ${department}, ${joinat})
      returning firstname, lastname, department, joinat
    `;
  return employee;
};

let selectEmployee = async (startDate, endDate, department) => {
  const employeee = await postgresdb`
  select * from employee.employee where joinat >= ${startDate} and 
  joinat <= ${endDate} and department = ${department}
  `;
  console.log(startDate, endDate)
  return employeee;
};

let listDepartment = async () => {
    const department = await postgresdb`
    select * from employee.department`;
    return department;
  };

module.exports = {
  addEmployee,
  selectEmployee,
  listDepartment
};
