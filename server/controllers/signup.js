const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('env2')('./secret.env');

const secret = process.env.SECRET_KEY;
const { signup } = require('../database/queries/signup');

const signupData = (req, res, next) => {
  const { password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    signup(req.body, hashedPassword)
      .then((result) => result.rows[0])
      .then((result) => {
        const accessToken = jwt.sign(
          { id: result.id, password: result.password },
          secret,
        );
        res.cookie('access', accessToken);
        res.cookie('userid', result.id);
        res.redirect('/posts');
      })
      .catch((err) => next(err));
  });
};

module.exports = { signupData };
