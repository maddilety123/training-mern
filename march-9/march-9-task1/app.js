const express = require("express");
const app = express();
app.use(express.urlencoded());

app.post("/age", (req, res) => {
  const { age } = req.body;
  if (age >= 18 && age <= 200) {
    res.status(200);
    res.send("eligible to vote");
  } else if (age < 18 && age > 0) {
    res.status(400);
    res.send("not eligible to vote");
  } else {
    res.status(402);
    res.send("invalid age");
  }
});

app.listen(9000, () => {
  console.log("server is started with port 9000");
});
