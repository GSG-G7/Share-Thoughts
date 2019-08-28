const { usersData } = require('../database/queries/login');

const login = (req, res) => {
  const { email, password } = req.body;
  // We will take the email from the user
  usersData()
    .then((result) => result.rows)
    .then((result) => result.forEach((user) => {
      // We will compare it to all email in our users table
      if (user.email === email) {
        //  we will compare the hashed passowrd here
        // If it's found we will then compare the passwords
        if (user.password === password) {
          // If wrong he should not be logged in
          console.log('Good passwprd');
          res.redirect('/posts');
        } else {
          // If it is then we compare the passwords if right will direct him to posts
          console.log('Wrong Password');
          res.send('Wrong Password');
        }
      } else {
        // If not he should not be logged in
        console.log('Your Not signed up');
        res.send('Your Not signed up');
      }
    }))
    .then((result) => console.log(result))
    .catch((err) => console.log(err));
};

module.exports = {
  login,
};
