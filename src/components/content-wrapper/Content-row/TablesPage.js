import Sidebar from '../../sidebar/Sidebar'
import TopBar from '../Top-bar/TopBar'
import Footer from '../footer/Footer'
import Table from '../Content-row/Table'
import React, { Component } from 'react'
export default class TablesPage extends Component {
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
                    <div id="content" className="m-2">
                        <TopBar />
                        <Table/>
                    </div>
                    <Footer/>
                </div>
            </>
        )
    }
}