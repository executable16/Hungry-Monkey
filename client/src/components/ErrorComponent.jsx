import React, { Component } from 'react'
import './css/ErrorComponent.css'

const homeAlign = {
    
    textAlign : `center`,
    color : `black`,
    
};

class ErrorComponent extends Component {
    
    render() {
        
        return (
            <div id = "grad6" style = {homeAlign}>
                
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />    
                <h2>oops :( </h2>
                <h3>The page you are looking for is missing. Please check the url again.</h3>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br />
            </div>
        )
    }
}

export default ErrorComponent
