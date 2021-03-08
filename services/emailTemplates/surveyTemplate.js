module.exports = (survey) => {
    return `
        <div style = "text-align : center;">
            <h3>I'd like your input !</h3>
            <p>Please answer the following question:</p>
            <p>${survey}</p>
            <div>
                <a href = "http://localhost:3000/api/surveys">Yes</a>
            </div>
            <div>
                <a href = "http://localhost:3000/api/surveys">No</a>
            </div>
        </div>   
    `;
} 