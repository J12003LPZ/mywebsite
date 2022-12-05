import { useState, useEffect } from "react";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://mywebsite-projects-api.herokuapp.com/projects/`
      );
      const data = await response.json();
      setProjects(data);
    }

    fetchData();
  }, []);
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="section-title">
        <h2>Portfolio</h2>
      </div>
      {projects.map((project) => {
        return (
          <div className="album py-5 bg-light" key={project.id}>
            <div className="container-fluid">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content-center align-items-center">
                <div className="col">
                  <div className="card shadow-lg">
                    <img
                      src={project.project_image}
                      className="img-fluid bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      alt={project.name}
                    />

                    <div className="card-body">
                      <p className="card-text text-center">
                        <b>{project.name}</b>
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="container">
                          <div className="row">
                            <div className="col text-center">
                              <div className="d-grid gap-2 col-9 mx-auto">
                                <a
                                  href={`/portfolio-details/${project.id}`}
                                  className="zoom btn btn-primary"
                                  type="button"
                                >
                                  View
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Portfolio;
