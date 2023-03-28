-- DB Creation
CREATE DATABASE IF NOT EXISTS orange_todo;

-- DB selection
USE orange_todo;

-- Table Creation
CREATE TABLE users 
(`id` INT AUTO_INCREMENT PRIMARY KEY,
`username` VARCHAR(100) NOT NULL UNIQUE,
`age` INT DEFAULT 0,
`date_of_birth` DATETIME NOT NULL,
`creation_time` TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

-- inserting a record
INSERT INTO 
users 
(`username`, `age`, `date_of_birth`) 
VALUES 
('Vignesh', 18, date('2000-05-25'));

-- selecting data
select * from users where gender = 'female';

-- Altering a table - Adding 1 new column
ALTER TABLE `orange_todo`.`users` 
ADD COLUMN `gender` VARCHAR(10) NOT NULL AFTER `date_of_birth`;

-- update -= 1 record
UPDATE users SET gender = 'female', age = 55 where username = 'selvi';

-- update multiple records
UPDATE users SET gender = 'queen' WHERE id NOT IN (3, 4);

-- creating a new table called todo
CREATE TABLE `orange_todo`.`tasks` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `task_name` VARCHAR(500) NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `creation_time` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `userIDKey_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `userIDKey`
    FOREIGN KEY (`user_id`)
    REFERENCES `orange_todo`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION);


-- delete a record
DELETE FROM users where id = 4;

-- operators
select * from users where age > 20 and gender = 'female';
select * from users where age > 20 or gender = 'female';
select * from users where not age > 20;
select * from users where age between 10 and 20;
select * from users order by username desc;

-- limit
select * from users limit 2 offset 2;

-- aggregation and alias
select count(*) as num_of_records from users;
select sum(age) as sum_of_age from users;
select min(age) as sum_of_age from users;
select max(age) as sum_of_age from users;

-- subquery
select username from users where age = (select min(age) from users);
select username from users where age = (select max(age) from users);

-- select U.username, U.age, U.gender from users U
-- where U.id in (select T.user_id from tasks T) ;

select 
U.username, U.age, U.gender,
T.task_name, T.status, T.creation_time
from 
(select * from users) U
JOIN
(select * from tasks) T
ON U.id = T.user_id;


-- Like
select username from users where username like '%v_';

-- join
SELECT 
U.username, U.age, U.gender,
T.task_name, T.status, T.creation_time
FROM users U
JOIN 
tasks T
ON T.user_id = U.id
where U.username = "Selvi";

-- group by
select gender, sum(age) as sum_of_age from users group by gender;

-- switch case
select username, age, gender, 
CASE
WHEN gender = 'female'
THEN "Welcome Mam"
WHEN gender = 'male'
THEN "welcome Sir"
END AS welcomeText
from users;
