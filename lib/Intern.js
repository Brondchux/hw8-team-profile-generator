const Employee = require("./employee");

class Intern extends Employee {
	constructor(school) {
		super();
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return new Intern(this.school);
	}
}

module.exports = Intern;
