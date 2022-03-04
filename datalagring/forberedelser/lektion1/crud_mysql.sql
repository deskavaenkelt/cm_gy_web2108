# Visa databaser
SHOW DATABASES;
# Skapa databas
CREATE DATABASE temp;
# Radera databas
DROP DATABASE temp;

CREATE DATABASE api;
# Använd "api" databasen
USE api;

#Skapa tabell Alt.1
CREATE TABLE users
(
    id     INT NOT NULL AUTO_INCREMENT,
    name   VARCHAR(50),
    age    INT,
    gender VARCHAR(10),
    PRIMARY KEY (id)
);

SHOW TABLES;
DROP TABLE users;

#Skapa tabell Alt.2
CREATE TABLE users
(
    id     INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name   VARCHAR(50),
    age    INT,
    gender VARCHAR(10)
);

# Visa innehåll i tabellen
SELECT *
FROM users;

# CRUD
# Create
INSERT INTO users(name, age, gender)
VALUES ('Lars', 19, 'Male');

INSERT INTO users(name, age, gender)
VALUES ('Emilie', 31, 'Female');

INSERT INTO users(name, age, gender)
VALUES ('Emilie', 33, 'Female'),
       ('Mohammad', 29, 'Male'),
       ('Said', 32, 'Male'),
       ('Girlie', 27, 'Female');

# Select
# Hämtar alla kolumner
SELECT *
FROM users;
# Hämta 2 kolumner
SELECT name, age
FROM users;
# Hämta bara unika värden
SELECT DISTINCT name
FROM users;
# Hämta bara rader där age = 29
SELECT *
FROM users
WHERE age = 29;
# Hämta bara rader där gender = male
SELECT *
FROM users
WHERE gender = 'Male';
# Hämta bara id = 1
SELECT *
FROM users
WHERE id = 1;
# AND
SELECT *
FROM users
WHERE id = 1
  AND name = 'Lars';

SELECT *
FROM users
WHERE id = 1
  AND name = 'Emilie';
# OR
SELECT *
FROM users
WHERE id = 1
   OR name = 'Lars';

SELECT *
FROM users
WHERE id = 1
   OR name = 'Emilie';

# Hämta all äldre än 20
SELECT *
FROM users
WHERE age > 20;

SELECT *
FROM users
WHERE age > 19;

SELECT *
FROM users
WHERE age >= 19;

SELECT *
FROM users
WHERE age < 20;

# Sortera i "ordning"
SELECT *
FROM users
ORDER BY name ASC;

SELECT *
FROM users
ORDER BY age;

SELECT *
FROM users
ORDER BY name DESC;

SELECT *
FROM users
ORDER BY name, age DESC;

# Sortera ut mellan 2 värden
SELECT *
FROM users
WHERE id BETWEEN 2 AND 3;

SELECT *
FROM users
WHERE age BETWEEN 20 AND 32;

SELECT *
FROM users
WHERE age NOT BETWEEN 20 AND 32;

SELECT *
FROM users;
# Update
UPDATE users
SET name  = 'Carl',
    age=25,
    gender='Male'
WHERE id = 6;

# Delete
DELETE
FROM users
WHERE id = 5;

#  Insert empty data in cell
INSERT INTO users(name, gender)
VALUES ('Nina', 'Female');
INSERT INTO users(name, gender)
VALUES ('Tina', 'Female');;
INSERT INTO users(name)
VALUES ('Robert');

SELECT *
FROM users;

SELECT *
FROM users
WHERE age IS NULL;

SELECT *
FROM users
WHERE age IS NOT NULL;

SELECT *
FROM users
WHERE gender IS NULL;