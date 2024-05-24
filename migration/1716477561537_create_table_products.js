module.exports = {
  up: `CREATE TABLE products(
        id SERIAL NOT NULL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        qty INT UNSIGNED NOT NULL DEFAULT 0,
        imgurl VARCHAR (255) NOT NULL,
        price INT UNSIGNED NOT NULL DEFAULT 0,
        category_id BIGINT UNSIGNED NOT NULL,
        brand_id BIGINT UNSIGNED NOT NULL,
        rating FLOAT NOT NULL  DEFAULT 0,
        description TEXT NOT NULL,
        FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE, 
        FOREIGN KEY (brand_id) REFERENCES brand(id) ON DELETE CASCADE
    )`,
  down: "DROP TABLE products",
};
