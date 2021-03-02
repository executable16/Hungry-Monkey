import React, { Component } from 'react'
import './css/DashboardComponent.css'

const homeAlign = {
    
    textAlign : `center`,
    color : `black`,
    
};

class DashboardComponent extends Component {
    
    render() {
        console.log("component rendered");
        return (
            <div id = "grad2" style = {homeAlign}>
                
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />   
                <h1>This is the DashboardComponent</h1>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br />
            </div>
        )
    }
}

export default DashboardComponent
