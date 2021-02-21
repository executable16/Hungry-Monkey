import React, { Component } from 'react'
import './css/HomeComponent.css'

const homeAlign = {
    
    textAlign : `center`,
    color : `blue`
};

class HomeComponent extends Component {
    render() {
        return (
            <div style = {homeAlign}>
                <div >
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <h2>Hungry Monkey</h2>
                    <div>
                        <h4>Collect feedback from your users</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeComponent
