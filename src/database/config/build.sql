BEGIN;

DROP TABLE IF EXISTS users, posts CASCADE;

CREATE TABLE users (
   id serial primary key,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) unique NOT NULL,
  password VARCHAR(255) NOT NULL

);

CREATE TABLE posts (
  id SERIAL  PRIMARY KEY,
  post TEXT NOT NULL,
  postTime TIMESTAMP,
  postImg  TEXT,
  votes INT,
  userId INT NOT NULL,
  FOREIGN KEY (userId)  REFERENCES users(id)
);



COMMIT;
