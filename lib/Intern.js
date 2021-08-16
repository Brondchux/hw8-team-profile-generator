const Employee = require("./employee");

class Intern extends Employee {
	constructor(id, name, email, school) {
		super(id, name, email);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return "Intern";
	}

	getUniqueQuestion() {
		return "School";
	}

	getUniqueAnswer() {
		return this.getSchool();
	}

	getIcon() {
		return "graduation-cap";
	}
}

module.exports = Intern;
