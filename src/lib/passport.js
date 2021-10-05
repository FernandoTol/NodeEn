const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('./bcrypt');
const pool = require('../conection')

passport.use('local.signup',new LocalStrategy({
    passReqToCallback: true
},async (req,done)=>{
    const { first_name, last_name, username, email, password} = req.body;
    let newUser = {
        first_name,
        last_name,
        username,
        email,
        password,
    };
    newUser.password = await bcrypt.encryptPassword(password);
    console.log(newUser);
}));