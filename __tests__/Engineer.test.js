const Engineer = require("../lib/engineer");
const { testId, testName, testEmail } = require("../lib/testUser");

describe("Engineer", () => {
	it("Should set a github user via constructor argument", () => {
		const testGithub = "brondchux";
		const employee = new Engineer(testId, testName, testEmail, testGithub);
		expect(employee.github).toBe(testGithub);
	});

	it("Should get a Github username using method getGitHub()", () => {
		const testGithub = "brondchux";
		const employee = new Engineer(testId, testName, testEmail, testGithub);
		expect(employee.getGithub()).toBe(testGithub);
	});

	it("Should get a role using method getRole()", () => {
		const testRole = "Engineer";
		const employee = new Engineer(testId, testName, testEmail, testRole);
		expect(employee.getRole()).toBe(testRole);
	});
});
