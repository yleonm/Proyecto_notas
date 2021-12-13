const passport = require('passport');
const LocalStarategy = require('passport-local').Strategy;

const User = require('../models/User')

passport.use(new LocalStarategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    //Match email´s user
     const user = await User.findOne({email})
     if(!user) {
         return done(null, false, {message: 'Not user found'})
     }else{
         //Match Password´s user
        const match = await user.matchPassword(password);
        if(match) {
            return done(null, user);
        }else{
            return done(null, false, {message: 'Incorrect Password'}); 
        }
     }
}));

passport.serializeUser((user,done) => {
    done(null, user.id);
});

passport.deserializeUser((id,done) => {
    User.findById(id,(err,user) => {
        done(err, user);
    })
})