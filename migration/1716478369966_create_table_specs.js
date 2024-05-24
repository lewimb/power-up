module.exports = {
  up: `CREATE TABLE specs(
        id SERIAL PRIMARY KEY,
        product_id BIGINT UNSIGNED NOT NULL,
        gpu VARCHAR (20),
        os VARCHAR(25),
        cpu VARCHAR(25),
        refresh_rate VARCHAR(25),
        ram VARCHAR(25),
        storage VARCHAR(25),
        FOREIGN KEY (product_id) REFERENCES products(id)
    )`,
  down: "DROP TABLE specs",
};
