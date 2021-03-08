const keys = {
    GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET,
    mongoURI : process.env.MONGO_URI,
    cookieKey : process.env.COOKIE_KEY,
    stripePublishableKey : process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey : process.env.STRIPE_SECRET_KEY,
    sendGridKey : process.env.SEND_GRID_KEY,
    fromEmail : process.env.FROM_EMAIL
}

module.exports = keys;
