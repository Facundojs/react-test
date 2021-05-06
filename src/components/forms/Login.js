import Sidebar from '../sidebar/Sidebar'
import TopBar from '../content-wrapper/Top-bar/TopBar'
import Footer from '../content-wrapper/footer/Footer'
import React, { Component } from 'react'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        return(
            <>
                <Sidebar/>
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <TopBar/>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}