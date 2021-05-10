import React from 'react'
import MainPage from './components/MainPage'
import PostProduct from './components/forms/PostProduct'
import TablesPage from './components/content-wrapper/Content-row/TablesPage'
import Error404 from './components/content-wrapper/Error404'
import { Route, Switch } from 'react-router-dom'
import './css/app.css'

function App() {
    return (
        <div id="wrapper">
            <Switch>  
                <Route exact path="/" component={MainPage}/>
                <Route path="/tables" component={TablesPage}/>
                <Route path="/product" component={PostProduct}/>
                <Route component={Error404}/>
            </Switch>
        </div>
    )
}

export default App;