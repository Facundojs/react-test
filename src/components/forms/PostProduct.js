import Sidebar from '../sidebar/Sidebar'
import TopBar from '../content-wrapper/Top-bar/TopBar'
import Footer from '../content-wrapper/footer/Footer'

export default function PostProduct() {
    return (
        <>
            <Sidebar/>
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar/>
                    <h1>ESTOY EN POST PRODUCT</h1>
                </div>
                <Footer/>
            </div>
        </>
    )
}