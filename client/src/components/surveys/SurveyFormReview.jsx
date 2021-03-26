import React from 'react'
import {connect} from 'react-redux'
import  formFields from './formFields.js'
import _ from 'lodash'
import * as actions from '../../actions'
import {withRouter} from 'react-router-dom'

function SurveyFormReview({ onCancel , formValues, submitSurvey, history}) {
    const reviewFields = _.map(formFields , ({name, label}) => {
        return(
            <div key = {name} >
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    })

    return(
        <div className = "container">
            <h5>Please confirm your enteries</h5>
            {reviewFields}
            <button className = "btn btn-warning btn-lg" onClick = {onCancel}>Back</button>
            <button className = "btn btn-success btn-lg float-end" onClick = {actions.submitSurvey(formValues, history)}> Send Survey</button>
        </div>
    )
    
}


/* The connect function is used to pull values
    out of the Redux Store
*/

function mapStateToProps(state){
    return {
        formValues : state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions) (withRouter(SurveyFormReview));
