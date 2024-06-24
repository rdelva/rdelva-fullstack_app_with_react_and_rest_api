import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav>
            <ul className="header--signedout">
                <li><Link to="sign-up.html">Sign Up</Link></li>
                <li><Link to="sign-in.html">Sign In</Link></li>
            </ul>
        </nav>
    );

}
export default Nav;