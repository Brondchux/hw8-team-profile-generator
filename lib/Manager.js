const Employee = require("./employee");

class Manager extends Employee {
	constructor(officeNumber) {
		super();
		this.officeNumber = officeNumber;
	}

	getRole() {
		return new Manager(this.officeNumber);
	}
}

module.exports = Manager;
