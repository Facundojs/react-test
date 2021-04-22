function UserItem() {
    return (
        <li className="nav-item dropdown no-arrow">
			<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
				<span className="mr-2 d-none d-lg-inline text-gray-600 small">Jordan Walke</span>
				<img className="img-profile rounded-circle" src="assets/images/jordan-walke.png" alt="Jordan Walke - Creador de React" width="60"/>
			</a>
		</li>
    )
}

export default UserItem