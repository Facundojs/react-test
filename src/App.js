import React from 'react'
import MainPage from './components/MainPage'
import PostProduct from './components/forms/PostProduct'
import Login from './components/forms/Login'
import Error404 from './components/content-wrapper/Error404'
import { Route, Switch } from 'react-router-dom'
import './css/app.css'

function App() {
    return (
        <div id="wrapper">
            <Switch>  
                <Route exact path="/" component={MainPage}/>
                <Route path="/user" component={Login}/>
                <Route path="/product" component={PostProduct}/>
                <Route component={Error404}/>
            </Switch>
        </div>
    )
}

export default App;