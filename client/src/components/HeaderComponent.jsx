import React, { Component } from 'react'
import {withRouter} from 'react-router'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

/* 
1. Import connect from react-redux
2. Define Map state to props function
3. Setup connect helper at export
*/

import '../components/css/HeaderComponent.css'


class HeaderComponent extends Component {

    renderContent(){

        switch(this.props.auth){
            
            case null :
                return ''
            case false :
                return <li><a className = "nav-link active " href = "/auth/google">Sign In With Google</a></li>
                 
            default :
                return <li><a className = "nav-link active " href = "/api/logout">Logout</a></li> 
        }
    }

    render() {
        return (
            <div>
                <nav className = "navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">&nbsp;&nbsp;Hungry Monkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/credit">Credits</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/addcredit">Add Credits</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/addcredit">About us</Link>
                                </li>
                            </ul>
                            <ul className = "navbar-nav">
                                <li className = "nav-item">
                                    {this.renderContent()}
                                {/* <Link className = "nav-link active " to = "/">{this.renderContent()}</Link> */}
                                </li>
                                {/* <li>
                                <Link className = "nav-link active" to = "/">Logout</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}


function mapStateToProps({auth}){
    return{
        auth,
    }
}

export default withRouter (connect(mapStateToProps)  (HeaderComponent))
