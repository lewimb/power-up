module.exports = {
    "up": `CREATE TABLE brand(
        id SERIAL PRIMARY KEY NOT NULL,
        brandName VARCHAR(30) NOT NULL,
        imgUrl VARCHAR(255) NOT NULL
    )`,
    "down": `DROP TABLE brand`
}