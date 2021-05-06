import { Link } from 'react-router-dom'

function Logo(props) {
    return (
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
				<div className="sidebar-brand-icon">
				<img className="w-50 p-3" src="../../assets/images/logo.png" alt="Digital House"/>
				</div>
		</Link>
    )
}

export default Logo 