import React from 'react'
import Button from './Button'
import AlertsItem from './AlertsItem'

import UserItem from './UserItem'
function TopBar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                <Button />
            <ul className="navbar-nav ml-auto">
                <AlertsItem />
                <div className="topbar-divider d-none d-sm-block"></div>
                <UserItem />
            </ul>
        </nav>
    )
}

export default TopBar