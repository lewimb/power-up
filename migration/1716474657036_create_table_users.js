module.exports = {
  up: `
  CREATE TABLE users(
    userId SERIAL NOT NULL PRIMARY KEY,
    email VARCHAR (100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)`,
  down: `
    DROP TABLE users
  `,
};
