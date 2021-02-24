document.addEventListener('DOMContentLoaded', function () {
	const projectsContainer = document.getElementById('projects-container');
	const localProjectsJSON = require('./projects.json');

	const getProjectsFromJson = async () => {
		const projects = await localProjectsJSON.projects;

		projectsContainer.innerHTML = projects
			.map((project) => {
				const {
					id,
					title,
					description,
					design,
					colorsUsed,
					imageDescription,
					imageMob,
					imageDesk,
				} = project;

				return `
                <div class="boxes__box item ${design
									.map((sinlgeDesign) => sinlgeDesign)
									.join(' ')} ${colorsUsed}">
					<div class="boxes__box--img">
						<img
							src="${imageMob}"
							alt="${imageDescription}"
							loading="lazy"
						/>
					</div>
					<div class="boxes__box--overlay 
                    ${
											colorsUsed === '' || 'one'
												? 'boxes__box--primary_clr'
												: ''
										} 
                    ${colorsUsed === 'two' ? 'boxes__box--secondary_clr' : ''}
                    ${colorsUsed === 'more' ? 'boxes__box--tertiary_clr' : ''}
                    "
                    >
						<div class="boxes__box--content">
							<h2>${title}</h2>
							<p>
								${description}
							</p>
							<a
								href="${imageDesk}"
								data-lightbox="mygallery"
								data-title="${imageDescription}"
								class="btn">
                                    Open
							</a>
						</div>
					</div>
				</div>
            `;
			})
			.reverse()
			.join('');

		let iso = new Isotope(projectsContainer, {
			// options
			itemSelector: '.item',
			layoutMode: 'fitRows',
		});

		const filterItems = document.querySelectorAll('.filter');

		filterItems.forEach((item) => {
			item.addEventListener('click', (e) => {
				filterItems.forEach((filter) => filter.classList.remove('active'));
				e.currentTarget.classList.add('active');

				let filterSelector = e.currentTarget.dataset.filter;

				iso.arrange({
					// item element provided as argument
					filter: filterSelector,
				});
			});
		});
	};

	if (projectsContainer) {
		getProjectsFromJson();
	}
});
