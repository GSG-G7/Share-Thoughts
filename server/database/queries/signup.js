const connection = require('../config/connection');

const signup = (userData, hashedPassword) => {
  const sql = {
    text:
      'insert into users (name,email,password,imgUrl,gender,birthday, country, bio) values ($1,$2,$3,$4,$5,$6,$7,$8) returning *;',
    values: [
      userData.username,
      userData.email,
      hashedPassword,
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
