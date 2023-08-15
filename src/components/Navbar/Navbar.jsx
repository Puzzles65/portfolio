import '../Navbar/Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faAddressBook, faGear, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logo} alt="logo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/">
                <FontAwesomeIcon icon={faUser} color="#00ADB5" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon={faGear} color="#00ADB5" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faFolderOpen} color="#00ADB5" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faAddressBook} color="#00ADB5" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/chi-trung-nguyen/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#00ADB5" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Puzzles65'>
                    <FontAwesomeIcon icon={faGithub} color="#00ADB5" />
                </a>
            </li>
        </ul>
    </div>
    
)

export default Navbar