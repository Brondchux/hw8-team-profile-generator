const Employee = require("./employee");

class Engineer extends Employee {
	constructor(github) {
		super();
		this.github = github;
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return new Engineer(this.github);
	}
}

module.exports = Engineer;
