const router = require('express').Router();

const { login } = require('./login');
const { clientError, serverError } = require('./error');
const { signupData } = require('./signup');

router.get('/', (req, res) => {
  res.render('home');
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
  res.render('posts');
});

router.use(clientError);
// router.use(serverError);
module.exports = router;
