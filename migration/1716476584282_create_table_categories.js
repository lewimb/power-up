module.exports = {
  up: `CREATE TABLE categories (
        id serial NOT NULL PRIMARY KEY,
        name varchar(20) NOT NULL,
        img_url varchar(255) NOT NULL
    )`,
  down: "DROP TABLE categories",
};
