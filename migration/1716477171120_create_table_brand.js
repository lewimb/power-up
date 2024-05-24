module.exports = {
  up: `CREATE TABLE brands(
        id SERIAL PRIMARY KEY NOT NULL,
        name VARCHAR(30) NOT NULL,
        img_url VARCHAR(255) NOT NULL
    )`,
  down: `DROP TABLE brands`,
};
