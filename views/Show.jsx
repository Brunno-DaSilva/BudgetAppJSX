const React = require("react");
class Show extends React.Component {
  render() {
    const { Budget } = this.props;

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
          <title>Budget - Show Page</title>
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
              Details: <span>{Budget.name}</span>
            </h1>

            <table>
              <tr>
                <th className="table-title">
                  <i class="fas fa-calendar-check "></i> D a t e
                </th>
                <th className="table-title">
                  <i class="fas fa-clipboard-list"></i> N a m e
                </th>
                <th className="table-title">
                  <i class="fas fa-user-tie"></i> F r o m
                </th>
                <th className="table-title">
                  <i class="fas fa-tags"></i> T a g
                </th>
                <th className="table-title">
                  <i class="fas fa-file-invoice-dollar"></i> A m o u n t
                </th>
              </tr>

              <tr>
                <tr>
                  <td>{Budget.name}</td>
                  <td>{Budget.name} </td>
                  <td>{Budget.from} </td>
                  <td>{Budget.tags} </td>
                  <td>{Budget.amount}</td>
                </tr>
              </tr>
            </table>

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
module.exports = Show;
