// import passport from 'passport'

const passport = require('passport')

const authRouter = (app) => {
    
    app.get('/auth/google',passport.authenticate('google',{
        scope : ['profile', 'email']
    }));
    
    app.get('/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/dashboard')
        }
    );

    app.get('/api/logout', (req,res) => {
        req.logout()
        res.redirect('/')
    })
    
    app.get('/api/currentuser', (req,res) => {
        res.send(req.user);
    })

    app.get('/', (req,res) => {
        res.send({
            message : 'Hello World Updated',
        })
    })
}

module.exports = authRouter;
