const DATABASE_URL = process.env.DATABASE_URL;
const pg = require('pg');
const Client = pg.Client;

//please work

const client = new Client(DATABASE_URL);
client.connect()
  .then(() => console.log('connected to db', DATABASE_URL))
  .catch(err => console.error('CONNECTION ERROR', err));

client.on('error', err => {
  console.error('\n**** DATABASE ERROR ****\n\n', err);
});

module.exports = client;