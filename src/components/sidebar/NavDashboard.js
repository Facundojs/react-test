import { Link } from 'react-router-dom'

function NavDashboard() {
    return (
        <li className="nav-item active">
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard - Geek Studio</span></Link>
        </li>
    )
}
export default NavDashboard