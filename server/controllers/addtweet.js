const { postTweet } = require('../database/queries/postTweet');

const newTweet = (req, res, next) => {
  const userId = req.cookies.userid;
  postTweet(userId, req.body)
    .then((result) => {
      console.log(result.rows);
      if (result.rows.length === 1) {
        res.redirect('/profile');
      } else {
        res.send('no post is added').redirect('/profile');
      }
    })
    .catch((error) => next(error));
};

module.exports = {
  newTweet,
};
