const connection = require('../config/connection');

const getTweets = (userId) => {
  console.log(userId);
  return connection.query(
    'select * from (select * from tweets inner join users on tweets.user_id=users.id) as t where t.user_id = $1',
    [userId],
  );
};

module.exports = { getTweets };
