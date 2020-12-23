const React = require("react");

class NewPage extends React.Component {
  render() {
    const Budget = this.props.Budget;

    return (
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />

          {/* Main StyleSheet */}
          <link rel="stylesheet" href="/css/style.css" />

          {/* FontAwesome */}
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
            crossorigin="anonymous"
          />
          <title>Budget - New Page</title>
          <link
            rel="icon"
            href="https://res.cloudinary.com/duprwuo4j/image/upload/v1574831158/Logo/BLOGO_k36v5y.png"
            type="image/icon type"
          ></link>
        </head>
        <body>
          <div className="nav-bar">
            <ul>
              <li>
                <a href="/budgets">
                  <i className="fas fa-home "></i>
                </a>
              </li>
              <li>
                <a href="/budgets/new">
                  <i className="fas fa-plus "></i>
                </a>
              </li>
              <li title="Redirecting to my Portfolio">
                <a href="http://www.bruno-dasilva.com/">
                  <i className="fas fa-cookie-bite "></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="new-container">
            <h1>
              New Item <span>Budget Cage</span>
            </h1>

            <div>
              <form class="" action="/budgets" method="POST">
                <p>Date: </p>
                <input type="text" value="" name="date" placeholder="May 22" />
                <br />
                <p>Name:</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Built my own Light saber"
                />
                <br />
                <p>Amount:</p>
                {/* <input type="text" value="" name="amount" placeholder="350" /> */}
                <input
                  type="number"
                  name="amount"
                  value=""
                  placeholder="amount"
                />
                <br />
                <p>From:</p>
                <input
                  type="text"
                  value=""
                  name="from"
                  placeholder="Disney Trip"
                />
                <br />
                <p> Tags:</p>
                <input
                  type="text"
                  value=""
                  name="tags"
                  placeholder="game, fun, night out"
                />
                <br />
                <input type="submit" name="" value="Create Item" />
              </form>
            </div>
            <a className="new__btn-back" href="http://localhost:3000/budgets">
              Go Back
            </a>
          </div>

          <svg viewBox="0 0 100 25">
            <path fill="#1f2833" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"></path>
          </svg>

          <footer>
            <img
              src="https://res.cloudinary.com/duprwuo4j/image/upload/v1574831158/Logo/BLOGO_k36v5y.png"
              alt="Bruno Logo"
            />
            <p>
              2020 Bruno DaSilva <span> Budget App</span>
            </p>
          </footer>
        </body>
      </html>
    );
  }
}
module.exports = NewPage;
