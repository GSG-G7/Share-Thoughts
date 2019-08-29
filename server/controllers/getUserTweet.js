const { getTweets } = require('../database/queries/getTweets');

const userTweets = (req, res, next) => {
  userId = req.cookies.userid;
  getTweets(userId)
    // .then((result) => console.log(result.rows))
    .then((res) => res.rows)
    .then((result) => {
      res.render('profile', {
        newpost: result,
      });
    })
    .catch((err) => console.log(err));
};
module.exports = { userTweets };
