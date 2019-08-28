const connection = require('../config/connection');

const signup = (userData) => {
  connection.query(
    'insert into users (name,email,password,imgUrl,gender,birthday, country, bio) values ($1,$2,$3,$4,$5,$6,$7,$8) returning *',
    [
      userData.username,
      userData.email,
      userData.password,
      userData.img,
      userData.gender,
      userData.date,
      userData.country,
      userData.bio,
    ],
  );
};
module.exports = signup;
