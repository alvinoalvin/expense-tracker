CREATE DATABASE expenses;
DROP TABLE IF EXISTS expenses CASCADE;

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  category TEXT,
  cost decimal, 
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted Boolean Default FALSE
);

insert into expenses (name, category, cost) VALUES ('Test', 'sampple', 20.00);