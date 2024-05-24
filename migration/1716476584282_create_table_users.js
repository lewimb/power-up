module.exports = {
  up: `CREATE TABLE categories (
        id serial NOT NULL PRIMARY KEY,
        categoryName varchar(20) NOT NULL,
        imgUrl varchar(255) NOT NULL
    )`,
  down: "DROP TABLE categories",
};
