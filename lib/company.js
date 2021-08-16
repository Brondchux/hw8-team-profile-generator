const pageTemplate = `<!DOCTYPE html>
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
			<div class="row" id="teamMembers"></div>
		</div>
	</body>
</html>`;

module.exports = pageTemplate;