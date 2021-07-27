const router = require("express").Router();

module.exports = (db) => {
  router.get("/expenses", (request, response) => {
    db.query(
      `SELECT * FROM expenses where deleted = false ORDER BY id ASC`
    ).then(({ rows: expenses }) => {
      response.json(expenses);
    }).catch(error => { error });
  });


  router.post("/expenses", (request, response) => {
    const { category, name, cost } = request.body;

    const values = [category, name, cost];
    const queryString = `
      INSERT INTO expenses (category, name, cost)
      VALUES ($1, $2, $3) Returning *
    `;

    try {
      db.query(queryString, values)
        .then(({ rows: expenses }) => {
          response.json(expenses);
        });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/expenses", (request, response) => {
    const arr = JSON.parse(request.query.array);
    let paramStr = "(";
    for (let i = 1; i <= arr.length; i++) {
      if (i != arr.length) {
        paramStr += `$${i},`;
      } else {
        paramStr += `$${i}`;
      }
    }
    paramStr += ")";

    const queryString = `UPDATE expenses SET deleted = true WHERE id IN ${paramStr} RETURNING *`;

    try {
      db.query(queryString, arr)
        .then((result) => {
          response.json({ msg: 'success' })
        })
        .catch((err) => {
          console.log(err.message)
        });
    } catch (err) {
      next(err);
    }
  });

  return router;
};
