import React from 'react'
import { Link } from 'react-router-dom'

function SidebarNavItem3() {
    return (
        <li className="nav-item">
			<Link className="nav-link" to="/#table">
				<i className="fas fa-fw fa-table"></i>
			<span>Tables</span></Link>
		</li>
    )
}

export default SidebarNavItem3