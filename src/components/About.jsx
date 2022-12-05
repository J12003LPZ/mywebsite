function About() {
  return (
    <section id="about" className="about">
      <div className="container-fluid" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Front End Web Developer.</h3>
            <p className="fst-italic">
              I have experience in front-end and back-end technologies, database
              creation and maintenance, and website design. I am a trained and
              experienced web developer. Strong analytical and creative
              abilities. Dedicated to the team and meticulous. My enthusiasm for
              both software design and software code development led me to
              pursue this career. Since I was a young child, I have been
              fascinated by how things function, and I have before and after in
              my life explained the wonderful world of web development.
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>+1 347 659 1803</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>New York, New York</span>
                  </li>

                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Github:</strong> <span><a href="https://github.com/J12003LPZ?tab=repositories" target="_blank">Github</a></span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong>{" "}
                    <span>Baccalaureate in Computer Science</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <span>leonardojeziellopez@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
