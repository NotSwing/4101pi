CREATE DATABASE csci410api;

CREATE TABLE users(
  user_name VARCHAR(255) NOT NULL,
  user_text VARCHAR(255) NOT NULL ,
  PRIMARY KEY(user_name)
);



INSERT INTO users (user_name, user_text) VALUES ('testuser1', 'test');