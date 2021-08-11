import Employee from "./employee";

class Intern extends Employee {
	constructor(school) {
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return new Intern(this.school);
	}
}
