let validateEmployee = (bodyData, callback) => {
  console.log(bodyData)
  let departments = ["DEV", "TEST", "MANAGING"];
  if (!bodyData.firstname) {
    callback({ message: "firstname is Mandatory" });
  } else if (!bodyData.lastname) {
    callback({ message: "lastname is Mandatory" });
  } else if (!departments.includes(bodyData.department)) {
    callback({ message: "Department is Mandatory" });
  } else {
    callback(bodyData);
  }
};

module.exports = {
    validateEmployee
}