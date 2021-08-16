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

	// otherwise run html function
	const completeUserResponse = newEmployeeFromClass(usersResponses);

	// store member in array
	storeNewMember(completeUserResponse);
};

// Store team member details in array
const storeNewMember = (memberObj) => {
	membersArray.push(memberObj);
	console.log("membersArray:", membersArray);

	// generate the html setup template
	generatEmployeeCards(membersArray);
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
const generateHtml = (employeeCardsArr) => {
	let pageTemplate = `<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Team Profile Generator</title>
		<link
			rel="stylesheet"
			href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
			integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
			crossorigin="anonymous"
		/>
		<link
			rel="stylesheet"
			href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
			integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
			crossorigin="anonymous"
		/>
	</head>
	<body>
		<div class="jumbotron">
			<div class="jumbotron jumbotron-fluid">
				<div class="container">
					<h1 class="display-4">Meet the team!</h1>
					<p class="lead">
						Below is a list of the team and what their individual roles are:
					</p>
				</div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				${employeeCardsArr}
			</div>
		</div>
	</body>
</html>`;

	fs.writeFile(fileName, pageTemplate, (err) => {
		if (err) throw err;
	});
};

// Generate each employee card
const generatEmployeeCards = (employees) => {
	if (!employees) return;
	const employeeCards = employees.map((employee) => {
		return `
<div class="col-3">
	<div class="card">
		<div class="card-header bg-success text-light">
			<h2>${employee.name}</h2>
			<h4><i class="fas fa-mug-hot"></i> ${employee.role}</h4>
		</div>
		<div class="card-body">
			<div class="card">
				<ul class="list-group list-group-flush">
					<li class="list-group-item">ID: ${employee.id}</li>
					<li class="list-group-item">Email: ${employee.email}</li>
					<li class="list-group-item">Office: West NE</li>
				</ul>
			</div>
		</div>
	</div>
</div>
		`;
	});

	console.log(employeeCards);
	console.log("employeeCards length:", employeeCards.length);

	// Generate the complete html file
	generateHtml(employeeCards);
};

// INITIALIZATION ======================
init();
