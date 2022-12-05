function Project({ project }) {
  return (
    <div key={project.id}>
      <div className="row gy-4">
        <div className="col-lg-8">
          <div className="portfolio-details-slider swiper">
            <div className="swiper-wrapper align-items-center">
              <div className="swiper-slide">
                <img src={project.project_image} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="portfolio-info shadow-lg">
            <h3>Project information</h3>
            <ul>
              <li>
                <strong>Category</strong>: {project.category}
              </li>
              <li>
                <strong>Client</strong>: {project.client}
              </li>
              <li>
                <strong>Project URL</strong>:{" "}
                <a href={project.project_url} target="_blank">
                  {project.name}
                </a>
              </li>
            </ul>
          </div>
          <div className="portfolio-description">
            <h2>About the project</h2>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
