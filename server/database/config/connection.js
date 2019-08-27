const { Pool } = require('pg');
require('env2')('./config.env')

let dbUrl = process.env.DB_URL;

const options = {
  connectionString: dbUrl,
  ssl: true,
};

if (!dbUrl) throw new Error('DB_URL not found');
module.exports = new Pool(options);
