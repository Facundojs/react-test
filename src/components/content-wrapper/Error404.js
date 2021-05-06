import Sidebar from '../sidebar/Sidebar'
import { Link } from 'react-router-dom'
import TopBar from './Top-bar/TopBar'
import Footer from './footer/Footer'
export default function Error404() {
    return (
        <>
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar/>
                    <h1>ESTA RUTA ES INVÁLIDA</h1>
                    <Link to="/">
                        Volver a la home
                    </Link>
                </div>
                <Footer/>
            </div>
        </>
    )
}