import React, {Component} from 'react'
import './css/PaymentComponent.css'
import img from './images/image.png'
import StripeCheckout from 'react-stripe-checkout'
import {connect} from 'react-redux'
import * as actions from '../actions'


// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY)

class PaymentComponent extends Component {
  render(){
      return (
        <>
        <div className="App" id = "grad">
          <div className="product">
            <img src={img} alt="laptop" style={{ width: "100%", height: "auto" }} />
          </div>
        </div>
        <br /><br />
        <StripeCheckout 
          name = "Hungry Monkey"
          description = "50 INR for 50 Credits"
          amount = {5000}
          currency = "INR"
          token = {token => this.props.handleToken(token)}
          stripeKey = {process.env.REACT_APP_STRIPE_KEY}
          panelLabel = "Pay Now"
        >
          <button className = "btn btn-success btn-lg ">Add Credits</button>
        </StripeCheckout>
        </>
      );
  }
};


export default connect(null,actions)(PaymentComponent)
