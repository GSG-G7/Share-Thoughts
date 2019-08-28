const router = require('express').Router();
const jwt = require('jsonwebtoken');
require('env2')('./secret.env');

const secret = process.env.SECRET_KEY;

const { login } = require('./login');
const { clientError, serverError } = require('./error');
const { signupData } = require('./signup');

router.get('/', (req, res) => {
  if (req.cookies.access) {
    jwt.verify(req.cookies.access, secret, (error, value) => {
      if (value) {
        res.redirect('/posts');
      } else {
        res.render('home');
      }
    });
  } else res.render('home');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login-data', login);

router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup-data', signupData);

router.get('/profile', (req, res) => {
  res.render('profile');
});
router.get('/posts', (req, res) => {
  if (req.cookies.access) {
    jwt.verify(req.cookies.access, secret, (error, value) => {
      if (value) {
        res.render('posts');
      } else {
        res.redirect('/');
      }
    });
  }
});
router.get('/logout', (req, res) => {
  res.clearCookie('access');
  res.clearCookie('userid');
  res.redirect('/');
});

router.use(clientError);
router.use(serverError);
module.exports = router;
