const Manager = require("../lib/manager");
const { testId, testName, testEmail } = require("../lib/testUser");

describe("Manager", () => {
	it("Should set office number via constructor argument", () => {
		const testOfficeNumber = 808;
		const employee = new Manager(testId, testName, testEmail, testOfficeNumber);
		expect(employee.officeNumber).toBe(testOfficeNumber);
	});

	it("Should get an office number using method getUniqueAnswer()", () => {
		const testOfficeNumber = 808;
		const employee = new Manager(testId, testName, testEmail, testOfficeNumber);
		expect(employee.getUniqueAnswer()).toBe(testOfficeNumber);
	});

	it("Should get a role using method getRole()", () => {
		const testRole = "Manager";
		const employee = new Manager(testId, testName, testEmail, testRole);
		expect(employee.getRole()).toBe(testRole);
	});
});
