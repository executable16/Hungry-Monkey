import React, { Component } from 'react'
import './css/AboutComponent.css'

const homeAlign = {
    
    textAlign : `center`,
    color : `purple`
};

class AboutComponent extends Component {
    render() {
        return (
            <div style = {homeAlign} id = "grad5">
                <div >
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <div>
                        <h3>About us</h3>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br />
                </div>
            </div>
        )
    }
}

export default AboutComponent
