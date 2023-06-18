const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/joulu/muistio", (req, res) => {
  res.send("Well hello!")
});

app.listen(port, () => console.log(`HelloNode app listening on port ${port}!`))

