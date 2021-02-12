import express from 'express'
import authRouter from './routes/authRoutes.js'
import passport from 'passport'
import mongoose from 'mongoose'
import keys from './config/keys.js'
import './models/user.js'
import './services/passport.js'
import cookieSession from 'cookie-session';

mongoose.connect(keys.mongoURI,{ useNewUrlParser: true , useUnifiedTopology: true })

const app = express();

app.use(cookieSession({
   maxAge : 30*24*60*60*1000,
   keys : [keys.cookieKey]
}))


app.use(passport.initialize())
app.use(passport.session())


authRouter(app)

const PORT = process.env.PORT || 5000
app.listen(PORT);

