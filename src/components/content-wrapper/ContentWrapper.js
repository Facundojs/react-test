import React from 'react'
import TopBar from './Top-bar/TopBar'
import Footer from './footer/Footer'
import ContainerFluid from './Content-row/ContainerFluid'
function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar/> 
                <ContainerFluid/>
            </div>
            <Footer/>
        </div>
    )
}

export default ContentWrapper