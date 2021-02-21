import React , {Component} from 'react'
import RootComponent from './components/RootComponent'
import {connect} from 'react-redux'
import * as actions from './actions/index'

/* As soon as the react application boots up, the App component
   will automatically call the action creator(see the last export line for clearance), the action creator will make the 
   ajax request and once the request is resolved, we get access to dispatch function
   and we will manually dispatch an action which is then sent to all of our reducers(authReducer in this context), where the 
   state is updated and hence required components are re-rendered 
*/

class App extends Component{

  componentDidMount(){
      this.props.fetchUser();
  }
  
  render(){
    return(
      <div>
        <RootComponent /> 
      </div>
    )
  }
}

export default connect(null,actions)(App);

/*  connect(null,actions)(App) means that pass the
    actions to App component as props */