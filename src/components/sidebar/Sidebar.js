import react from 'react'
import NavDashboard from './NavDashboard'
import Logo from './SidebarLogo'
import Actions from './Actions'
import SidebarNavItem1 from './SidebarNavItem1'
import SidebarNavItem2 from './SidebarNavItem2'
import SidebarNavItem3 from './SidebarNavItem3'

function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
            <Logo />
            <hr className="sidebar-divider" />
            <NavDashboard />
            <hr className="sidebar-divider" />
            <Actions />
            <SidebarNavItem1 />
            <SidebarNavItem2 />
            <SidebarNavItem3 />
			<hr class="sidebar-divider d-none d-md-block"/>
        </ul>
    )
}

export default Sidebar 