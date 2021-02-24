document.addEventListener('DOMContentLoaded', function () {
	const localProjectsJSON = require('./projects.json');

	const getProjectsFromJson = async () => {
		const projects = localProjectsJSON.projects;

		console.log(projects);
	};

	getProjectsFromJson();
});
