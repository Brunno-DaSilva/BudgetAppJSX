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

//tells express to parse data from POST request:
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

//=============================
//          Routers
//=============================

//====================
//       Index
//====================
app.get("/budgets", (req, res) => {
  //   res.send("<h1>Ciao Bella, Me piace parlare italiano</h1>");

  let sum = 0;
  for (let i = 0; i < Budget.length; i++) {
    sum += Budget[i].amount;
  }
  //   bank Account balance
  res.render("Index", { sum: sum, Budget });
});

//====================
//       New
//====================

app.get("/budgets/new", (req, res) => {
  let sum = 0;
  for (let i = 0; i < Budget.length; i++) {
    sum += Budget[i].amount;
  }
  res.render("New", {
    Budget: Budget,
    sum: sum,
  });
});

//====================
//       Show
//====================

app.get("/budgets/:id", (req, res) => {
  res.render("Show.jsx", { Budget: Budget[req.params.id] });
});
//====================
//    Create Route
//====================

app.post("/budgets", (req, res) => {
  //   console.log(req.body);
  if (req.body.amount != Number) {
    req.body.amount = parseInt(req.body.amount);
  } else {
    req.body.amount = parseInt(req.body.amount);
  }

  Budget.push(req.body);
  res.redirect("/budgets");
});

//====================
//      Delete
//====================

app.delete("/budgets/:id", (req, res) => {
  fruits.splice(req.params.id, 1); //remove the item from the array
  res.redirect("/budgets"); //redirect back to index route
});

//=============================
// Listening on Port 3000
//=============================
app.listen(port, (req, res) => {
  console.log(`Ascoltando al porto... ${port}`);
});
