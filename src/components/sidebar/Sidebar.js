import NavDashboard from './NavDashboard'
import Logo from './SidebarLogo'
import Actions from './Actions'
import { Link } from 'react-router-dom'

import SidebarNavItem3 from './SidebarNavItem3'

function Sidebar() {
    return (
        <ul className=" navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion pt-3" id="accordionSidebar">
            <Logo />
            <NavDashboard />
            <hr className="sidebar-divider" />
            <Actions />
            <li className="nav-item">
			    <Link className="nav-link" to="/tables">
				<i className="fas fa-fw fa-table"></i>
			<span>Tables</span></Link>
		    </li>
            <hr className="sidebar-divider d-none d-md-block"/>
        </ul>
    )
}

export default Sidebar 