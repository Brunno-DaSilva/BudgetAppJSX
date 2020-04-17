//=============================
//      Dependencies
//=============================

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//=============================
//          Data
//=============================
const Budget = require("./models/budget");

//=============================
// Required Middleware Engine
//=============================
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));

//=============================
//          Routers
//=============================

//Index
app.get("/budgets", (req, res) => {
  //   res.send("<h1>Ciao Bella, Me piace parlare italiano</h1>");

  let sum = 0;
  for (let i = 0; i < Budget.length; i++) {
    sum += Budget[i].amount;
  }
  // bank Account balance
  res.render("Index.jsx", {
    Budget: Budget,
    sum: sum,
  });
});

//=============================
// Listening on Port 3000
//=============================
app.listen(port, (req, res) => {
  console.log(`Ascoltando al porto... ${port}`);
});
