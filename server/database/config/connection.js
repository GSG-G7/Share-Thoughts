const { Pool } = require('pg');
require('env2')('./config.env');

let dbUrl;

if (process.env.NODE_ENV === 'development') {
  dbUrl = process.env.DB_URL;
} else if (process.env.NODE_ENV === 'test') {
  dbUrl = process.env.TEST_DB_URL;
} else {
  dbUrl = process.env.DATABASE_URL;
}
const options = {
  connectionString: dbUrl,
  ssl: true,
};

if (!dbUrl) throw new Error('DB_URL not found');
module.exports = new Pool(options);
