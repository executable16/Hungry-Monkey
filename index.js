import express from 'express'
const app = express()

app.get('/', (request,response) => {
    response.send({
        message : 'Hello World'
    });
})

const PORT = process.env.PORT || 5000
app.listen(PORT);