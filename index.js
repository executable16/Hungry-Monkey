// import express from 'express'
// import authRouter from './routes/authRoutes.js'
// import mongoose from 'mongoose'
// import './services/passport.js'
// import './models/User.js'

// import passport from 'passport'
// import keys from './config/keys.js'
// import cookieSession from 'cookie-session';

const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
const bodyParser = require('body-parser')

require('./models/User')
require('./services/passport')
require('./models/Survey')

mongoose.connect(keys.mongoURI,{ useNewUrlParser: true , useUnifiedTopology: true })

const app = express();

app.use(bodyParser.json())

app.use(cookieSession({
   maxAge : 30*24*60*60*1000,
   keys : [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT);

