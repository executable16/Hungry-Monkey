//SurveyForm shows a form for a user to add input

import React , { Component } from 'react'
import { reduxForm , Field} from 'redux-form'
import SurveyField from './SurveyField'
import {Link} from 'react-router-dom'
import _ from 'lodash';
import validateEmails from '../../utils/validateEmails.js'
import '../css/SurveyFormComponent.css'
import formFields from './formFields.js'


const layout = {
    
    padding : `20px 0px 10px 0px`
}

const footer = {
    position: `fixed`,
    left: `0`,
    bottom: `0`,
    width: `100%`,
    backgroundColor: `blue`,
    color: `white`,
    textAlign: `center`
      
}


class SurveyForm extends Component {


    renderFields(){
        return (
            _.map(formFields, ({label, name}) => {
                //console.log(label, name);
                return (
                    <div style = {layout}>
                    <Field className = "container-fluid" key = {name} component = {SurveyField} type = "text" label = {label} name = {name} />
                    <br />
                    <br />
                    </div>
                )
            })
            
        )
    }

    


    render(){
        return(
            <div id = "grad7" style = {{ width : `100%`, height : `100%`}}>
                <div className = "container" >
                    {/* this.props.handleSubmit is basically a method owned by reduxForm and hence is accesible as a prop */}
                    <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
                        {this.renderFields()}
                        
                        <div>
                            <Link to = "/dashboard" className = "btn btn-danger btn-lg "  >Cancel</Link>
                        
                        
                            <button type = "submit" className = "btn btn-success btn-lg float-end">Next</button>
                        </div>
                        
                    </form>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br  />
                
                <div style = {footer}>Note : Please separate the Recipient List of Emails by comma ','</div>
            </div>
        )
    }
}

function validate(values){

    const errors = {};

    // if(!values.title){
    //     errors.title = 'You must provide a title';
    // }

    // if(!values.subject){
    //     errors.subject = 'You must provide a subject';
    // }

    // if(!values.body){
    //     errors.body = 'You must provide some content here'
    // }

    errors.recipients = validateEmails(values.recipients || '')

    _.each(formFields, ({ name }) => {
        if(!values[name]){
            errors[name] = `You must provide ${name}`
        }
    })

    

    return errors;
}

export default reduxForm({
    validate ,
    form : 'surveyForm',
    destroyOnUnmount : false,
    
})(SurveyForm)