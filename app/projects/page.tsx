import React from "react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Project One",
      description: "A modern web application built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/project1.jpg",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Project Two",
      description: "An e-commerce platform with real-time features",
      technologies: ["Next.js", "TypeScript", "Firebase"],
      imageUrl: "/project2.jpg",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Project Three",
      description: "A social media dashboard with analytics",
      technologies: ["React", "D3.js", "Express"],
      imageUrl: "/project3.jpg",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <div className="projects-container">
      <section className="projects-hero">
        <h1>My Projects</h1>
        <p className="subtitle">Explore my latest work and personal projects</p>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.imageUrl} alt={project.title} />
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.githubUrl} className="github-link">
                  GitHub
                </a>
                <a href={project.liveUrl} className="live-link">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProjectsPage;
