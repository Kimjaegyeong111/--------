document.addEventListener('DOMContentLoaded', () => {

    fetch('data.json')
        .then(response => response.json())
        .then(data => {

            renderProjects(data.projects);

            renderExperiences(data.experiences);
        })
        .catch(error => console.error('Error fetching data:', error));


    function renderProjects(projects) {
        const container = document.querySelector('#projects .container');
        if (!container) return;

        const projectContainer = document.createElement('div');
        projectContainer.id = 'project-list';

        container.appendChild(projectContainer); 

        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <h4>${project.title}</h4>
                <p class="tech-stack">Front-end: ${project.techStackFront} / Back-end: ${project.techStackBack}</p>
                <p>
                    ${project.description} <br>
                    [나의 역할] ${project.role}
                </p>
                <div class="project-links">
                    <a href="${project.githubLink}" class="link-btn">GitHub &rarr;</a>
                </div>
            `;
            projectContainer.appendChild(card);
        });
    }


    function renderExperiences(experiences) {
        const timelineContainer = document.querySelector('#experience .timeline');
        if (!timelineContainer) return;

        timelineContainer.innerHTML = ''; 

        experiences.forEach(exp => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.innerHTML = `
                <h4>${exp.title}</h4>
                <p>${exp.detail}</p>
            `;
            timelineContainer.appendChild(item);
        });
    }
});