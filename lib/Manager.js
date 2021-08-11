import Employee from "./employee";

class Manager extends Employee {
	constructor(officeNumber) {
		this.officeNumber = officeNumber;
	}

	getRole() {
		return new Manager(this.officeNumber);
	}
}
