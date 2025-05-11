"use client";
import { FlipCard } from "@/components";
import React from "react";
import { ProjectProp } from "@/types";
import { svgs } from "@/assets";

const ProjectsPage = () => {
  const projects: ProjectProp[] = [
    {
      title: "CRUD TABLE APP",
      description: "Authenticated crud table app with connected to a database",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/projects/proj.crud-table.png",
      githubUrl: "https://github.com/ChaimTriebitz/crud-table-front",
      githubUrl2: "https://github.com/ChaimTriebitz/crud-table-back",
      liveUrl: "https://vito-front.onrender.com/",
      id: 1,
    },
    {
      title: "REAL ESTATE LANDING PAGE",
      description:
        "Landing page for a real estate company with a modern design",
      technologies: ["HTML", "CSS", "JavaScript"],
      imageUrl: "/projects/proj.meah-shearim.png",
      githubUrl: "https://github.com/ChaimTriebitz/meah-shearim",
      liveUrl: "https://www.meah-shearim.com/",
      id: 2,
    },
    {
      title: "LEWYER WEBSITE",
      description: "Website for a lewyer with some cool animations",
      technologies: ["animation", "SCSS", "responsive"],
      imageUrl: "/projects/proj.lewyer.png",
      githubUrl: "https://github.com/ChaimTriebitz/freiman-frontend",
      liveUrl: "https://www.fraiman-law-firm.com/",
      id: 3,
    },
    {
      title: "TRIP EXPERIENCE SHARING APP",
      description:
        "Trip experience sharing app with uploading images to cloudinary games and other",
      technologies: ["cloudinary", "canvas", "express"],
      imageUrl: "/projects/proj.trip.png",
      githubUrl: "https://github.com/ChaimTriebitz/trip-frontend/",
      liveUrl: "https://trip-front-end.onrender.com/",
      id: 4,
    },
  ];

  return (
    <main className="main projects">
      <h1>My Projects</h1>
      <section>
        {projects.map((project) => (
          <FlipCard
            image={{ src: project.imageUrl, alt: project.title }}
            key={project.id}
          >
            <h1>{project.title}</h1>
            <h3>{project.technologies.join(", ")}</h3>
            <p>{project.description}</p>
            <div className="links">
              <div className="link">
                {svgs.globe}
                <a href={project.liveUrl} target="_blank">
                  {project.liveUrl}
                </a>
              </div>
              <div className="link">
                {svgs.github}
                <a href={project.githubUrl} target="_blank">
                  {project.githubUrl}
                </a>
              </div>

              {project.githubUrl2 && (
                <div className="link">
                  {svgs.github}
                  <a href={project.githubUrl2} target="_blank">
                    {project.githubUrl2}
                  </a>
                </div>
              )}
            </div>
          </FlipCard>
        ))}
      </section>
      {/* <section style={{ height: "100px" }}></section> */}
    </main>
  );
};

export default ProjectsPage;
