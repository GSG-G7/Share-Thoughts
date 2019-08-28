const connection = require('../config/connection');

const signup = (userData) => {
  const sql = {
    text:
      'insert into users (name,email,password,imgUrl,gender,birthday, country, bio) values ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
    values: [
      userData.username,
      userData.email,
      userData.password,
      userData.img,
      userData.gender,
      userData.date,
      userData.country,
      userData.bio,
    ],
  };
  return connection.query(sql);
};
module.exports = { signup };
