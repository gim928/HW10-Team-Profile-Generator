const internal = require("stream");
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.role = "Manager";
  }
  getOffice() {
    return this.officeNum;
  }
}

module.exports = Manager;
