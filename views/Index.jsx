const React = require("react");
class Budget extends React.Component {
  render() {
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
          <title>Budget-Index Page</title>
        </head>
        <body>
          <div class="nav-bar">
            <ul>
              <li>
                <a href="#">Home </a>
              </li>
              <li>
                <a href="#budgetInfo">Budget</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li id="bankAccount">
                Bank Account:
                <span id="accountBalance" class="lowBalance"></span>
                <span id="accountBalance" class="positiveBalance"></span>
              </li>
            </ul>
          </div>
          <div class="container">
            <div class="container-title-wrapper">
              <div>
                <h1>
                  Budget
                  <br /> Cage
                </h1>
              </div>
              <div>
                <img src="/nickBoy.png" alt="img" />
              </div>
            </div>
            <p>Because everyone deserves a second chance</p>
            <svg viewBox="0 3 100 14">
              <path
                fill="#66fcf1"
                d="M0 30 V12 Q30 17 55 12 T100 11 V30z"
              ></path>
            </svg>
          </div>

          <section id="budge-info" class="table-container">
            <div class="table__btn-container">
              <a class="table__btn-add" href="/budgets/new">
                Add Item
              </a>
            </div>
            <table>
              <tr>
                <th>
                  <i class="fas fa-calendar-check"></i> D a t e
                </th>
                <th>
                  <i class="fas fa-clipboard-list"></i> N a m e
                </th>
                <th>
                  <i class="fas fa-file-invoice-dollar"></i> A m o u n t
                </th>
              </tr>

              <tr>
                <tr>
                  <td></td>
                  <td>
                    <a href="budgets/"></a>
                  </td>
                  <td></td>
                </tr>
              </tr>
            </table>
          </section>
          <svg viewBox="0 0 100 25">
            <path fill="#1f2833" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"></path>
          </svg>

          <footer>
            <p>
              &copy 2020 Bruno DaSilva <span> Budget App</span>
            </p>
          </footer>
        </body>
      </html>
    );
  }
}
module.exports = Budget;
