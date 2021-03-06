const client = require('../db-client');

client.query(`

  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256),
    password VARCHAR(256)
  );

  CREATE TABLE IF NOT EXISTS genres (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256),
    description VARCHAR(256)
  );

  CREATE TABLE IF NOT EXISTS records (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256),
    genre_id INTEGER NOT NULL,
    artist VARCHAR(256),
    description VARCHAR(256),
    cover VARCHAR(512)
  );

`)
  .then(
    () => console.log('create-tables complete!'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });