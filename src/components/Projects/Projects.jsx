import '../Projects/Projects.scss'
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'
import projectData from '../../projectData'

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>Projects</h2>
      <Carousel data-bs-theme="dark">
        {projectData.map((project, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="image-container"
                >
                  <img
                    className="d-block w-100"
                    src={project.image}
                    alt={project.title}
                  />
                </a>
              ) : (
                <div className="image-container">
                  <img
                    className="d-block w-100"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              )}
              {project.githubLink ? (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-content"
                >
                  <h5>{project.title}</h5>
                  <h3>{project.description}</h3>
                  <div className='footer'>
                  <div className="icons-container">
                    {project.icons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="icon" />
                    ))}
                  </div>
                  <p>ReadMe</p>
                  </div>
                </a>
              ) : (
                <div className="text-content">
                  <h5>{project.title}</h5>
                  <h3>{project.description}</h3>
                  <div className='footer'>
                  <div className="icons-container">
                    {project.icons.map((Icon, iconIndex) => (
                      <Icon key={iconIndex} className="icon" />
                    ))}
                  </div>
                  <p>ReadMe</p>
                  </div>
                </div>
              )}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default Projects
