/* EmailValidater is a regularExpression validater which is known to have 99.99% accuracy on determining whether
   an email is valid or not */

//eslint-disable-next-line
const emailValidater = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
    const invalidEmails = emails
        .split(',')
        .map(email => email.trim(' '))
        .filter(email => emailValidater.test(email) === false)

        if(invalidEmails.length){
            return `Invalid Emails : ${invalidEmails}`
        }
        
        return null;
}