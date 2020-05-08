//=============================
//      Dependencies
//=============================

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const methodOverride = require("method-override");

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
//method override
app.use(methodOverride("_method"));

//=============================
//          Routers
//=============================

/****************************************************************************************
 * Presentational Routes
 * Index: shows a list of all of our resources and has linked to New, Edit, & Deelete
 * New: shows a form to creata new resource lined to create
 * Show: shows one individual resource from our list
 * EDIT: Shows a form to update a resource linked to our Update route
 ****************************************************************************************/

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
  res.render("New", {
    Budget: Budget,
  });
});

//====================
//       Show
//====================

app.get("/budgets/:id", (req, res) => {
  res.render("Show.jsx", { Budget: Budget[req.params.id] });
});
/*************************************************************************
 * Functional Routes
 * Create: creates a new resource using app.post() | Post
 * Delete: deletes a resource use app.delete() | Destroy
 * Update: updates a resource | PUT
 *************************************************************************/

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
  Budget.splice(req.params.id, 1); //remove the item from the array
  res.redirect("/budgets"); //redirect back to index route
});

//====================
//      Edit
//====================
app.get("/budgets/:id/edit", (req, res) => {
  res.render("Edit", {
    Budget: Budget[req.params.id],
    index: req.params.id,
  });
});

//====================
//      Update
//====================
app.put("/budgets/:id", (req, res) => {
  Budget[req.params.id] = req.body; //in our budget array, find the index that is specified in the url (:id).  Set that element to the value of req.body (the input data)
  res.redirect("/budgets"); //redirect to the index page
});

//=============================
// Listening on Port 3000
//=============================
app.listen(PORT, (req, res) => {
  console.log(`Ascoltando al porto... ${PORT}`);
});
