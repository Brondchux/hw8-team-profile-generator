const Employee = require("../lib/employee");
const { testId, testName, testEmail } = require("../lib/testUser");

describe("Employee", () => {
	it("Should generate a new instance of Employee", () => {
		const employee = new Employee();
		expect(typeof employee).toBe("object");
	});

	it("Should set a name using constructor arguments", () => {
		const employee = new Employee(testId, testName, testEmail);
		expect(employee.name).toBe(testName);
	});

	it("Should set an ID using constructor arguments", () => {
		const employee = new Employee(testId, testName, testEmail);
		expect(employee.id).toBe(testId);
	});

	it("Should set an email using constructor arguments", () => {
		const employee = new Employee(testId, testName, testEmail);
		expect(employee.email).toBe(testEmail);
	});

	it("Should get email address via the function getEmail()", () => {
		const employee = new Employee(testId, testName, testEmail);
		expect(employee.getEmail()).toBe(testEmail);
	});
});
