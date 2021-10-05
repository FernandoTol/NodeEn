const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('./bcrypt');
const pool = require('../connection');


passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, email, password, done) => {
    const { first_name, last_name, user_name } = req.body;
    let last_login = new Date();
    let is_active = 1;
    let data_joined = new Date();
    let is_superuser = 1;

    let newUser = {
        first_name,
        last_name,
        user_name,
        email,
        password,
        last_login,
        is_active,
        data_joined,
        is_superuser

    };
    newUser.password = await bcrypt.encryptPassword(password);
    //console.log(newUser);
    await pool.beginTransaction(async (error) => {
        if (error) { throw error; }
        const rows = await pool.query('SELECT email FROM user WHERE email =?', [email]);
        if (0 == rows.lenght) {
            await pool.query("INSERT INTO user SET ?", newUser, (err, result) => {
                if (err) {
                    pool.rollback(() => {
                        throw err;
                    });
                }
            });
            pool.commit((err) => {
                if (err) {
                    pool.rollback(() => {
                        throw err;
                    });
                }
                console.log('Transaction Complete.');
            });
        } else {
            errors = [{
                "location": "body",
                "msg": " El email ya esta registrado",
                "param": "email"
            }]
            req.res.render('auth/signup', { data: req.body, errors: errors });
        }
    });
}));
