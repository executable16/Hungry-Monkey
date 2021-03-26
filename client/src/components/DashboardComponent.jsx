import React from 'react'
import {Link} from 'react-router-dom'

import './css/DashboardComponent.css'

const homeAlign = {
    textAlign : `center`,
    color : `black`,  
};

const addButton = {
    position: `fixed`,
    bottom: `60px`,
    right: `60px` 
}

const DashboardComponent = () => {
    
    return (
        <div id = "grad2" style = {homeAlign}>
            
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />   
            <h1>This is the DashboardComponent</h1>
            <Link to = "/surveys/new" type = "button" className = "btn btn-primary btn-lg" style = {addButton} >Add New Surveys</Link>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br />
        </div>
    )
}

export default DashboardComponent
