const connection = require('../config/connection');

const postTweet = (userID, tweetData) => {
  console.log(111111, userID);
  console.log(22222, tweetData);

  return connection.query(
    'insert into tweets (tweetcontent,tweetpublishTime,user_id) values ($1,$2,$3) returning *;',
    [tweetData.tweettext, new Date(), userID],
  );
};
module.exports = { postTweet };
