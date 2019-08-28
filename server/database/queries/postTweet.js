const connection = require('../config/connection');

const postTweet = (tweetData, userID) => {
  connection.query(
    'insert into tweets (user_id,tweetcontent,tweetpublishTime) values ($1,$2,$3) returning *',
    [userID, tweetData.tweettext, tweetData.tweettime],
  );
};

module.eports = postTweet;
