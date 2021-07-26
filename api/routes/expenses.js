const router = require("express").Router();

module.exports = (db) => {
  router.get("/expenses", (request, response) => {
    db.query(
      `SELECT * FROM expenses ORDER BY id ASC`
    ).then(({ rows: expenses }) => {
      response.json(expenses);
    }).catch(error => { error });
  });


  router.post("/expenses", (request, response) => {
    const { category, name, cost } = request.body;

    const values = [category, name, cost];
    const queryString = `
      INSERT INTO expenses (category, name, cost)
      VALUES ($1, $2, $3)
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
  
  return router;
};
