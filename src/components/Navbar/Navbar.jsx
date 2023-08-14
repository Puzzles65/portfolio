import '../Navbar/Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/samplelogo.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faAddressBook, faGear, faFolderOpen, faFolder } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logo} alt="logo" />
            <h3 className='name'>Chi Trung</h3>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHouse} color="orange" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faAddressCard} color="orange" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon={faGear} color="orange" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faFolderOpen} color="orange" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faAddressBook} color="orange" />
            </NavLink>
        </nav>
    </div>
    
)

export default Navbar