const { brands } = require("./seeders.json");

const data = brands
  .map((brand) => `('${brand.name}','${brand.imgUrl}')`)
  .join(", ");
module.exports = {
  up: `INSERT INTO brands(name,img_url)
        VALUES${data}
  `,
  down: async (conn, next) => {
    await conn.promise().query("SET FOREIGN_KEY_CHECKS = 0");
    await conn.promise().query("TRUNCATE TABLE brands");
    await conn.promise().query("SET FOREIGN_KEY_CHECKS = 1");

    next();
  },
};
