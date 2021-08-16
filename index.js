// PSEUDOCODE ======================

// DEPENDENCES ======================
const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");

// DATA ======================
let membersArray = [];

// FUNCTIONS ======================
// Questions
const generalQuestions = () => {
	return [
		{
			type: "input",
			name: "name",
			message: "What is your name?",
		},
		{
			type: "input",
			name: "id",
			message: "What is your ID?",
		},
		{
			type: "input",
			name: "email",
			message: "What is your email address?",
		},
		{
			type: "list",
			name: "role",
			message: "Select the role below?",
			choices: ["manager", "engineer", "intern"],
		},
	];
};

const managerQuestions = () => {
	return [
		{
			type: "input",
			name: "office",
			message: "What is your office number?",
		},
		...addNewMemberQuestions(),
	];
};

const engineerQuestions = () => {
	return [
		{
			type: "input",
			name: "github",
			message: "What is your github username?",
		},
		...addNewMemberQuestions(),
	];
};

const internQuestions = () => {
	return [
		{
			type: "input",
			name: "school",
			message: "Which school did you graduate from?",
		},
		...addNewMemberQuestions(),
	];
};

const addNewMemberQuestions = () => {
	return [
		{
			type: "confirm",
			name: "addMember",
			message: "Do you want to enter another team member?",
		},
	];
};

// Ask the questions
const askQuestions = (questionsArray) => {
	return inquirer
		.prompt(questionsArray)
		.then((answers) => answers)
		.catch((err) => console.log("This error occured ", err));
};

// Repeate the questions
const repeatQuestions = (usersResponses) => {
	console.log("usersResponses:", usersResponses);
	if (usersResponses.addMember) {
		return init();
	}
	// Otherwise run html function
	const a = newEmployeeFromClass(usersResponses);
};

// Create new employee info using their respective class
const newEmployeeFromClass = ({
	id,
	name,
	email,
	role,
	office,
	github,
	school,
}) => {
	let employeeCardInfo;
	switch (role) {
		case "manager":
			employeeCardInfo = new Manager(id, name, email, office);
			break;
		case "engineer":
			employeeCardInfo = new Engineer(id, name, email, github);
			break;
		default:
			employeeCardInfo = new Intern(id, name, email, school);
			break;
	}
	return employeeCardInfo;
};

// Start the app
const init = async () => {
	let moreQuestions;
	const answers = await askQuestions(generalQuestions());
	switch (answers.role) {
		case "manager":
			moreQuestions = await askQuestions(managerQuestions());
			repeatQuestions({ ...answers, ...moreQuestions });
			break;
		case "engineer":
			moreQuestions = await askQuestions(engineerQuestions());
			repeatQuestions({ ...answers, ...moreQuestions });
			break;
		default:
			moreQuestions = await askQuestions(internQuestions());
			repeatQuestions({ ...answers, ...moreQuestions });
			break;
	}
};

// INITIALIZATION ======================
init();
