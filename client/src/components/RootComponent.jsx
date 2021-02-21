import React , {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import DashboardComponent from './DashboardComponent'
import CreditComponent from './CreditComponent'
import AddCreditComponent from './AddCreditComponent'


class RootComponent extends Component{
  render(){
    return(
      <div>
        <Router>
          <HeaderComponent />
          <Switch>
            <Route exact path = "/" component = {HomeComponent} />
            <Route exact path = "/home" component = {HomeComponent} />
            <Route exact path = "/dashboard" component = {DashboardComponent} />
            <Route exact path = "/credit" component = {CreditComponent} />
            <Route exact path = "/addcredit" component = {AddCreditComponent} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default RootComponent;
