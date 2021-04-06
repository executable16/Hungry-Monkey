const sgMail = require('@sendgrid/mail')
const keys = require('../config/keys')
const {sendGridKey, fromEmail} = keys;
const surveyTemplate = require('../services/emailTemplates/surveyTemplate.js')

sgMail.setApiKey(sendGridKey);

const sendMail = async (survey) => {

    // console.log("###############################")
    // console.log(survey);
    // console.log("###############################");

    const { recipients, subject, body } = survey;

    // console.log("The email subject is ", survey.subject);
    // console.log("The email body is ", survey.body);
    // console.log("The user id is ", survey._id);

    // console.log("--------------------------------------------");
    // console.log(body);
    // console.log("--------------------------------------------");

    const params = {
        body ,
        id : survey._id
    }

    const msg = {
        to : recipients,
        from : fromEmail,
        subject : subject,
        text : subject,
        html : surveyTemplate(params),
        trackingSettings : {
            "clickTracking" : {
                "enable" : true
            }, 
        },
    }

    sgMail.send(msg)
        .then((response) => {
            //console.log(response);
        }).catch((err) => {
            console.log(err.message);
        })
}

module.exports = sendMail

