import ProjectList from "../components/ProjectList";
import { useParams } from "react-router-dom";

function PortfolioDetails() {
  const { id } = useParams();

  return (
    <main id="main">
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <ProjectList id={id} />
        </div>
      </section>
    </main>
  );
}

export default PortfolioDetails;
