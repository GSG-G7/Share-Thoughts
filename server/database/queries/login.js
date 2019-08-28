const connection = require('../config/connection');

const usersData = () => connection.query('select id, email, password from  users');

module.exports = {
  usersData,
};
