const Employee = require("./employee");

class Manager extends Employee {
	constructor(id, name, email, officeNumber) {
		super(id, name, email);
		this.officeNumber = officeNumber;
	}

	getRole() {
		return "Manager";
	}

	getUniqueQuestion() {
		return "Office";
	}

	getUniqueAnswer() {
		return this.officeNumber;
	}

	getIcon() {
		return "mug-hot";
	}
}

module.exports = Manager;
