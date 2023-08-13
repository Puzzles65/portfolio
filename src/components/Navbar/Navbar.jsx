import '../Navbar/Navbar.scss'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/samplelogo.avif'
import { FontAwesomeIcon } from '@fortawesome/react-frontawesome'
import { faHouse } from '@fortawesome/fontawesome-free-solid '

const Navbar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={logo} alt="logo" />
            <h3 className='name'>Chi Trung</h3>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHouse} />
            </NavLink>
        </nav>
    </div>
    
)

export default Navbar