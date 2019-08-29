const { join } = require('path');
const { readFileSync } = require('fs');
const connection = require('./connection');

const build_db = () => {
  const sql = readFileSync(join(__dirname, 'build_db.sql')).toString();

  return connection
    .query(sql)
    .then(console.log('Build Successfully', new Date()))
    .catch((err) => console.log(err));
};
module.exports = { build_db };
