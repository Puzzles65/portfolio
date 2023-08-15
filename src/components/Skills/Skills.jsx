import React from 'react';
import '../Skills/Skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faRocket, faDatabase, faPaintBrush, faTerminal, faVideo, } from '@fortawesome/free-solid-svg-icons';
import { faPython, faJs, faReact, faBootstrap, faNodeJs, faTrello, faGithub, faSlack } from '@fortawesome/free-brands-svg-icons';
import { SiExpress, SiDjango, SiMongodb } from 'react-icons/si'


const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        <div className="skill">
          <FontAwesomeIcon icon={faCode} />
          <p>VsCode</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faRocket} />
          <p>Postman</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faPython} />
          <p>Python</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faJs} />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faDatabase} />
          <p>SQL</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faReact} />
          <p>React</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faBootstrap} />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
            <SiDjango />
          <p>Django</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faNodeJs} />
          <p>Node.js</p>
        </div>
        <div className="skill">
            <SiExpress />
          <p>Express.js</p>
        </div>
        <div className="skill">
            <SiMongodb />
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faDatabase} />
          <p>PostgresSQL</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faTrello} />
          <p>Trello</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faPaintBrush} />
          <p>Excalidraw</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faGithub} />
          <p>Git</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faTerminal} />
          <p>Zsh</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faSlack} />
          <p>Slack</p>
        </div>
        <div className="skill">
          <FontAwesomeIcon icon={faVideo} />
          <p>Zoom</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
