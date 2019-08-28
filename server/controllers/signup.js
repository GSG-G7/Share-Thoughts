const { signup } = require('../database/queries/signup');

const signupData = (req, res, next) => {
  console.log(req.body);
  signup(req.body)
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

module.exports = { signupData };
