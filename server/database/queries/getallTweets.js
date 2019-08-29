const connection = require('../config/connection');

const getallTweets = () => connection.query(
    'select users.name,users.imgurl,tweets.tweetcontent,tweets.tweetpublishtime,comments.commentpublishtime,comments.commentcontent from users inner join tweets ON tweets.user_id = users.id inner join comments ON comments.user_id = users.id',
  );
module.exports = getallTweets;
