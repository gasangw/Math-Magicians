import {Link} from 'react-router-dom'
import "./Layout.css"
const Navbar = () => {
   return (
    <div>
        <div className="navContainer">
            <h1 className='heading'>Math Magicians</h1>
            <ul className="links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/structure">Calculator</Link></li>
                <li><Link to="/quote">Quote</Link></li>
            </ul>
        </div>
    </div>
   )
}

export default Navbar;