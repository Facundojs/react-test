import React from 'react'
import { Link } from 'react-router-dom'

function SidebarNavItem2() {
    return (
        <li className="nav-item">
            <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span></Link>
        </li>
    )
}

export default SidebarNavItem2