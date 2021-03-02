const keys = require('../config/keys')
const stripe = require('stripe')(keys.stripeSecretKey)
const requireLogin = require('../middlewares/requireLogin')
module.exports = (app) => {
    app.post('/api/stripe', requireLogin, async (req, res) => {

        console.log("Server says " ,req.body)
        try{
            const charge = await stripe.charges.create({
                amount : 5000,
                currency : 'INR',
                description : '50 INR for 50 Credits',
                source : req.body.id,
                shipping : {
                    name : null,
                    address : {
                        line1 : null,
                        postal_code : null,
                        city : null,
                        state : null,
                        country : null
                    }

                }
            });
            req.user.credits = req.user.credits + 50;
            const user = await req.user.save();
            // console.log("Hurray got a response ", charge)
            res.send(user);
        }catch(err){
            console.log("Error " , err.message)
        }
    })
}