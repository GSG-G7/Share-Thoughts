const connection = require('../config/connection');

const deleteTweet = (userID, tweetID) => {
  connection.query(
    'delete from tweets where tweets.user_id=$1 and tweets.id=$2 returning *',
    [userID, tweetID],
  );
};

const deleteComments = (tweetID) => {
  connection.query(
    'delete from comments where comments.tweet_id=$1 returning *',
    [tweetID],
  );
};

module.exports = { deleteTweet, deleteComments };
