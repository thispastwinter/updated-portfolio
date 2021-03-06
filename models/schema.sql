DROP DATABASE IF EXISTS portfoliodb;
CREATE DATABASE portfoliodb;

USE portfoliodb;

SELECT * FROM Projects;

ALTER TABLE Projects MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE Projects MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();