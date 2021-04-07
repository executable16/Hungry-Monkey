import React, { Component } from 'react'
import './css/AboutComponent.css'

const homeAlign = {
    
    textAlign : `center`,
    color : `purple`
};

class AboutComponent extends Component {
    render() {
        return (
            
            <div  style = {homeAlign} id = "grad5">
                <div >
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <div>
                        <h3>We at Hungry Monkey help people like you to conduct surveys to keep a competitive edge by truly understanding the voice of your customers.</h3>
                        <h3>Sending Surveys was never this easier !</h3>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br />
                    
                </div>
            </div>
            
        )
    }
}

export default AboutComponent
