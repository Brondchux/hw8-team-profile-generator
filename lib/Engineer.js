import Employee from "./employee";

class Engineer extends Employee {
	constructor(github) {
		this.github = github;
	}

	getGithub() {
		return this.github;
	}

	getRole() {
		return new Engineer(this.github);
	}
}
