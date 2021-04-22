import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import ContentWrapper from './components/content-wrapper/ContentWrapper'
import './css/app.css'

function App() {
    return (
        <div id="wrapper">
            <Sidebar />
            <ContentWrapper />
        </div>
    )
}

export default App;