import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projList = projects.map(projectname => {return(
    <ProjectItem key = {projectname.id} name = {projectname.name} about ={projectname.about} technologies={projectname.technologies} />
  )})
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projList}</div>
    </div>
  );
}

export default ProjectList;
