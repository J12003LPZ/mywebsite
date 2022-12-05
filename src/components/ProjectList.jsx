import { useState, useEffect } from "react";
import Project from "./Project";


function ProjectList({ id }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://mywebsite-projects-api.herokuapp.com/projects/${id}`
      );
      const data = await response.json();
      setProjects(data);
    }

    fetchData();
  }, [id]);
  return (
    <div>
      {projects.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    
    </div>
  );
}

export default ProjectList;
