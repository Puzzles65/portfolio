import '../Projects/Projects.scss'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import projectData from '../../projectData'

function Projects() {
    return (
        <div className="projects">
          <h2>Projects</h2>
          <Carousel data-bs-theme="dark">
            {projectData.map((project, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex">
                  <div className="image-container">
                    <img
                      className="d-block w-100"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div className="text-content">
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                  <div className="icons-container">
                    {project.icons.map((Icon, iconIndex) => (
                    <Icon key={iconIndex} className="icon" />
                    ))}
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      );
    }

export default Projects;