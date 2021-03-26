import React , {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import HomeComponent from './HomeComponent'
import DashboardComponent from './DashboardComponent'
import CreditComponent from './CreditComponent'
import AddCreditComponent from './AddCreditComponent'
import AboutComponent from './AboutComponent'
import ErrorComponent from './ErrorComponent'
import SurveyNew from './surveys/SurveyNew'

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
            <Route exact path = "/about" component = {AboutComponent} />
            <Route exact path = "/surveys/new" component = {SurveyNew} />
            <Route component = {ErrorComponent} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default RootComponent;
