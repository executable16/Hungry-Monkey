import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchSurveys} from '../../actions';

const border = {
    borderWidth : `4px`,
}

export class SurveyList extends Component {

    componentDidMount(){
        this.props.fetchSurveys();
    }

    renderSurveys(){
        let counter = 1;
        return this.props.surveys.reverse().map(survey => {

            return (
                <div className = "container">
                    <br />
                    <div class="card text-center border-dark" style = {border}>
                        <div class="card-header"> Survey Number : {counter++} </div>
                        <div class="card-body">
                            <h5 class="card-title">{survey.title}</h5>
                            <p class="card-text">{survey.body}</p>
                        </div>
                        
                        <button className = "btn btn-success btn-sm" >Yes : {survey.yes}</button>
                        <button className = "btn btn-danger btn-sm" >No : {survey.no}</button>
                        <p>Sent On : {new Date(survey.dateSent).toLocaleDateString()}</p>
                    </div>
                    <br />
                </div>
            );
        })
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        )
    }
}

/* surveys comes how we wired it up in the combine reducers*/
function mapStateToProps({surveys}){
    return {
        surveys : surveys,
    }
}
export default connect(mapStateToProps, {fetchSurveys})(SurveyList)
