// import {Strategy as GoogleStrategy} from 'passport-google-oauth20'
// import keys from '../config/keys.js'
// import passport from 'passport'

// /* The non ES6 way of importing Strategy -> const GoogleStrategy = require('passport-google-oauth20').Strategy */
// import mongoose from 'mongoose'
// import '../models/User.js'
// const User = mongoose.model('users')

const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')
const User = mongoose.model('users')

passport.serializeUser((user,done) => {
    done(null,user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null,user)
    })
})

passport.use(new GoogleStrategy({
    clientID : keys.GOOGLE_CLIENT_ID,
    clientSecret : keys.GOOGLE_CLIENT_SECRET,
    callbackURL : '/auth/google/callback',
    proxy : true,
    
}, (accessToken,refreshToken, profile, done) => {
    
    User.findOne({googleID : profile.id})
        .then((existingUser) => {
            if(existingUser){
                done(null,existingUser)
            }
            else{
                new User({googleID : profile.id})
                    .save()
                    .then((user) => done(null,user))
                }  
            })
    })
);
