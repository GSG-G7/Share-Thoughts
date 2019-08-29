const test = require('tape');
const { build_db } = require('../server/database/config/buil_db');
const { getallTweets } = require('../server/database/queries/getallTweets');

test('test is working', (t) => {
  t.equal(1, 1, 'one must equal one');
  t.end();
});

test.onFinish(() => process.exit(0));
