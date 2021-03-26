/*
    SurveyField contains logic to render a single abel and text input    
*/

import React from 'react'


// ReduxForm dumps props here by itself and is accesible as props ofc !

export default ({input, label, meta : {error, touched}}) => {
    return (
        <div >
            <label>{label}</label>
            <input {...input} style = {{display : `flex`, width : `80%`, height : `auto`}}/>
            <div className = "text-danger font-weight-bold">
                {touched && error}
            </div>
            
        </div>
    )
}


