const Employee = require("./employee");

class Engineer extends Employee {
	constructor(id, name, email, github) {
		super(id, name, email);
		this.github = github;
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return "Engineer";
	}

	getUniqueQuestion() {
		return "Github";
	}

	getUniqueAnswer() {
		return `<a href="https://github.com/${this.getGithub()}" target="blank">${this.getGithub()}</a>`;
	}

	getIcon() {
		return "glasses";
	}
}

module.exports = Engineer;
