const Intern = require("../lib/intern");
const { testId, testName, testEmail } = require("../lib/testUser");

describe("Intern", () => {
	it("Should set school via constructor argument", () => {
		const testSchool = "Nnamdi Azikiwe University";
		const employee = new Intern(testId, testName, testEmail, testSchool);
		expect(employee.school).toBe(testSchool);
	});

	it("Should get a school using method getSchool()", () => {
		const testSchool = "Nnamdi Azikiwe University";
		const employee = new Intern(testId, testName, testEmail, testSchool);
		expect(employee.getSchool()).toBe(testSchool);
	});

	it("Should get a role using method getRole()", () => {
		const testRole = "Intern";
		const employee = new Intern(testId, testName, testEmail, testRole);
		expect(employee.getRole()).toBe(testRole);
	});
});
