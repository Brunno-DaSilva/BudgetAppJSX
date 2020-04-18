const React = require("react");
class Show extends React.Component {
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
          <title>Budget - Show Page</title>
        </head>
        <body>
          <div className="nav-bar">
            <ul>
              <li>
                <a href="#">
                  <i class="fas fa-home"></i>
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/budgets/new">
                  <i class="fas fa-plus"></i>
                </a>
              </li>
              <li>
                <a href="http://www.bruno-dasilva.com/">
                  <i class="fas fa-cookie-bite"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="new-container">
            <p>Show Item Details Budget Cage</p>

            <table>
              <tr>
                <th className="table-title">
                  <i class="fas fa-calendar-check fa-2x"></i> D a t e
                </th>
                <th className="table-title">
                  <i class="fas fa-clipboard-list fa-2x"></i> N a m e
                </th>
                <th className="table-title">
                  <i class="fas fa-user-tie fa-2x"></i> F r o m
                </th>
                <th className="table-title">
                  <i class="fas fa-tags fa-2x"></i> T a g
                </th>
                <th className="table-title">
                  <i class="fas fa-file-invoice-dollar fa-2x"></i> A m o u n t
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
