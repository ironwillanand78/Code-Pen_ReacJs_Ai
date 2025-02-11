import React from "react";
import { useSelector } from "react-redux";

import styles from "./project.module.css";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = useSelector((state) => state.projects?.projects);
  // console.log("Projects from Redux:", projects);

  return (
    <div className={styles.projectsContainer}>
      <h2>Your Projects</h2>
      {projects?.length > 0 ? (
        projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))
      ) : (
        <p>No projects available.</p>
      )}
    </div>
  );
};

export default Projects;
