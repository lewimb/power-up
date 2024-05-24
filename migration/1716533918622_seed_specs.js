const { products } = require("./seeders.json");

module.exports = {
  up: async (conn, cb) => {
    const [prdts] = await conn.promise().query("SELECT id from products");

    const data = products
      .map(
        ({ spec }, i) =>
          `(
    ${prdts[i].id},
    '${spec.graphicsCard}',
    '${spec.os}',
    '${spec.cpu}',
    '${spec.refreshRate}',
    '${spec.memory}',
    '${spec.storage}')`
      )
      .join(", ");

    // console.log(prdts);

    //     console.log(`INSERT INTO specs(product_id,id,gpu,os,cpu,refresh_rate,ram,storage)
    //     VALUE ${prd_id},${data}
    // `);

    await conn.promise()
      .query(`INSERT INTO specs(product_id,gpu,os,cpu,refresh_rate,ram,storage)
                VALUE ${data}
      `);

    cb();
  },
  down: async (conn, next) => {
    await conn.promise().query("SET FOREIGN_KEY_CHECKS = 0");
    await conn.promise().query("TRUNCATE TABLE specs");
    await conn.promise().query("SET FOREIGN_KEY_CHECKS = 1");

    next();
  },
};
