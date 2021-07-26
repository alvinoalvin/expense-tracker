const express = require('express')
const path = require('path');
const app = express()
const bodyParser = require('body-parser')
const PORT = (process.env.PORT || 8080);
const db = require("./db");

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const expenses = require("./routes/expenses");
app.use("/api", expenses(db));

app.get('/api/data', (req, res) => res.json({
  message: "Seems to work!",
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/'));
});

app.listen(PORT, () => {
  console.log(`Express seems to be listening on port ${PORT} so that's pretty good 👍`);
});

module.exports = app;
