BEGIN;

DROP TABLE IF EXISTS users, essays, sessions CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20),
  email text UNIQUE NOT NULL,
  password text NOT NULL,
  avatar BYTEA
);

CREATE TABLE essays (
  id SERIAL PRIMARY KEY,
  question TEXT,
  date DATE,
  spider_1 TEXT,
  spider_2 TEXT,
  spider_3 TEXT,
  spider_4 TEXT,
  introduction TEXT,
  body_1 TEXT,
  body_2 TEXT,
  body_3 TEXT,
  conclusion TEXT,
  complete BOOLEAN,
  user_id INTEGER, FOREIGN KEY(user_id) REFERENCES users(id)
);

CREATE TABLE sessions (
  sid TEXT PRIMARY KEY,
  data TEXT
);



INSERT INTO users (username, email, password, avatar) VALUES 
('luigi', 'luigi@test', 'psw', 'ghjasgajhsGhjasgahjsg');

INSERT INTO essays (date, question, spider_1, spider_2, spider_3, spider_4, introduction, body_1, body_2, body_3, conclusion, complete, user_id) VALUES 
('2022-03-18', 'The best foods', 'mushrooms', 'veggies', 'fruits', 'meat', 'we love food', 'some people think food is more important than exercising', 'others think sleep is the most important habit to control for your overall health', 'I believe it is a combination of the two', 'As a conclusion, I will try and keep a balanced approach and keep good habits.', true, 1);

INSERT INTO sessions (sid, data) VALUES
('sghjsGASHj51675', 'data' );
