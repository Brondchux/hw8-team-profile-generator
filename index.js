// PSEUDOCODE ======================

// DEPENDENCES ======================
const Manager = require("./lib/manager");
const Intern = require("./lib/intern");
const Engineer = require("./lib/Engineer");
const companyHtml = require("./lib/company");
const inquirer = require("inquirer");
const fs = require("fs");

// DATA ======================
const fileName = "members.html";
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
	// store member in array
	storeNewMember(usersResponses);
	console.log("usersResponses:", usersResponses);
	if (usersResponses.addMember) {
		return init();
	}
	// otherwise run html function
	const a = newEmployeeFromClass(usersResponses);
	console.log("membersArray:", membersArray);
};

// Store team member details in array
const storeNewMember = (memberObj) => {
	membersArray.push(memberObj);
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

// Generate the html for the webpage
const generateHtml = () => {
	fs.writeFile(fileName, companyHtml, (err) => {
		if (err) throw err;
	});
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
