import React from 'react'
import {Link} from 'react-router-dom'
import SurveyList from './surveys/SurveyList'
import './css/DashboardComponent.css'

const homeAlign = {
    textAlign : `center`,
    color : `black`,  
    // display : `flex`
};

const addButton = {
    position: `fixed`,
    bottom: `60px`,
    right: `60px` 
}

const DashboardComponent = () => {
    
    return (
        <div id = "grad2" style = {homeAlign}>
            <SurveyList />   
            <Link to = "/surveys/new" type = "button" className = "btn btn-primary btn-lg" style = {addButton} >Add New Surveys</Link>
        </div>
    )
}

export default DashboardComponent
