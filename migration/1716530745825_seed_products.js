const { products } = require("./seeders.json");

const data = products
  .map(
    (product) =>
      `('${product.name}', 
  ${product.brand_id}, 
  ${product.quantity}, 
  '${product.img_url}',
  '${product.description}',
  ${product.price},
  ${product.rating},
  ${product.category_id})`
  )
  .join(", ");

module.exports = {
  up: `INSERT INTO products(name,brand_id,qty,img_url,description,price,rating,category_id)
        VALUES ${data}
    `,
  down: async (conn, next) => {
    await conn.promise().query("SET FOREIGN_KEY_CHECKS = 0");
    await conn.promise().query("TRUNCATE TABLE products");
    await conn.promise().query("SET FOREIGN_KEY_CHECKS = 1");

    next();
  },
};
