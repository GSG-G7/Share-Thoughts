const connection = require('../config/connection');

const updateTweet = (newTweet, userID, tweetID) => {
  connection.query(
    'update tweets set tweetcontent=$1 where user_id=$2 and id=$3 returning *',
    [newTweet, userID, tweetID],
  );
};
module.exports = updateTweet;
