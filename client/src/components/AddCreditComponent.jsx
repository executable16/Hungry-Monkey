import React, { Component } from 'react'
import PaymentComponent from './PaymentComponent'
import './css/AddCreditComponent.css'

const homeAlign = {
    textAlign : `center`,
    color : `purple`
};

class AddCreditComponent extends Component {
    render() {
        return (
            <div id = "grad4" style = {homeAlign}>
                <br /><br />
                <h3>You are running out of credits, add more to use our service</h3>
                <br /><PaymentComponent /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> 
                <br /><br /><br /><br />
            </div>
        )
    }
}

export default AddCreditComponent
