create database pelis;
USE pelis;
CREATE TABLE user_data(
username VARCHAR(100) PRIMARY KEY NOT NULL,
password VARCHAR(100) NOT NULL -- NEVER DO THIS IRL
);