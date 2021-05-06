import React from 'react'
import { Link } from 'react-router-dom'

function SidebarNavItem1() {
    return (
        <li className="nav-item">
            <Link className="nav-link collapsed" to="/">
                <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
        </Link>
        </li>  
    )
}

export default SidebarNavItem1