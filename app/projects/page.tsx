"use client";
import { FlipCard } from "@/components";
import React from "react";
import { ProjectProp } from "@/types";

const ProjectsPage = () => {
  const projects: ProjectProp[] = [
    {
      title: "CRUD TABLE APP",
      description: "Authenticated crud table app with connected to a database",
      technologies: ["React", "Node.js", "MongoDB"],
      imageUrl: "/projects/proj.crud-table.png",
      githubUrl: "https://github.com/ChaimTriebitz/vito-front",
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
      title: "TRIP EXPERIENCE SHARING APP",
      description:
        "Trip experience sharing app with uploading images to cloudinary games and other",
      technologies: ["Cloudinary", "canvas", "express"],
      imageUrl: "/projects/proj.trip.png",
      githubUrl: "https://github.com/ChaimTriebitz/trip-frontend/",
      liveUrl: "https://trip-front-end.onrender.com/",
      id: 2,
    },
  ];

  return (
    <main className="main projects">
      <h1>My Projects</h1>
      <section>
        {projects.map((project, index) => (
          <FlipCard
            image={{ src: project.imageUrl, alt: project.title }}
            key={project.id}
          >
            <h1>{project.title}</h1>
            <h3>{project.technologies.join(", ")}</h3>
            <p>{project.description}</p>
          </FlipCard>
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;
