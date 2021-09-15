const pool = require('../database');
const helpers = require('../lib/helpers');
const auth = {};

const passport = require('passport');

auth.createUser = async (req, res) => {
    const { password, username, fullname } = req.body;
    const newUser = {
        username,
        fullname,
        password
    }
    newUser.password = await helpers.encryptPassword(password);
    try {
        const row = await pool.query('INSERT INTO users SET ?', [newUser]);
        if (row.affectedRows === 1) return res.json({ message: 'User Created' });
    } catch (e) {
        console.error(e)
    }
}

auth.signin = async (req, res, next) => {
    passport.authenticate('local.signin', (error, user, info) => {
        if (error) throw error;
        if (!user) res.send('No User exists');
        else {
            req.logIn(user, (error) => {
                if (error) throw error;
                res.json({ success: 'Successfully Authenticated' });
            });
        }
    })(req, res, next);
}

auth.whoami = (req, res) => {
    if (!req.user) return res.json({ error: "No autenticado" });
    return res.json(req.user);
}

auth.logout = (req, res) => {
    req.logOut();
    res.json({ message: 'desconectado' });
}

module.exports = auth;