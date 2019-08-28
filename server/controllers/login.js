const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('env2')('./secret.env');
const { usersData } = require('../database/queries/login');

const secret = process.env.SECRET_KEY;

const login = (req, res, next) => {
  const { email, password } = req.body;
  // We will take the email from the user
  usersData(email)
    .then((result) => {
      if (result.rows.length === 0) res.send('not signed up');
      const hashedPassword = result.rows[0].password;
      bcrypt.compare(password, hashedPassword, (err, value) => {
        if (value) {
          const accessToken = jwt.sign(
            { id: result.id, password: result.password },
            secret,
          );
          res.cookie('access', accessToken);
          res.cookie('userid', result.rows[0].id);
          res.redirect('/posts');
        } else {
          res.send('Wrong Password');
        }
      });
    })
    .catch((err) => next(err));
};

module.exports = {
  login,
};
