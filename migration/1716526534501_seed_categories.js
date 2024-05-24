const { categories } = require("./seeders.json");

const data = categories
  .map((category) => `('${category.name}', '${category.img_url}')`)
  .join(", ");

module.exports = {
  up: `INSERT INTO categories(name,img_url)
        VALUES${data}
    `,
  down: async (conn, next) => {
    await conn.promise().query("SET FOREIGN_KEY_CHECKS = 0");
    await conn.promise().query("TRUNCATE TABLE categories");
    await conn.promise().query("SET FOREIGN_KEY_CHECKS = 1");

    next();
  },
};
