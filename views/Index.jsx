const React = require("react");
class Budget extends React.Component {
  render() {
    const { Budget, sum } = this.props;

    console.log(this.props);

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
          <div className="nav-bar">
            <ul>
              <li>
                <a href="http://localhost:3000/budgets">
                  <i className="fas fa-home fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="http://localhost:3000/budgets/new">
                  <i className="fas fa-plus fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="http://www.bruno-dasilva.com/">
                  <i className="fas fa-cookie-bite fa-2x"></i>
                </a>
              </li>
              <li id="bankAccount">
                Budget Balance:
                {sum < 0 ? (
                  <span id="accountBalance" className="lowBalance">
                    ${sum}
                  </span>
                ) : (
                  <span id="accountBalance" className="positiveBalance">
                    ${sum}
                  </span>
                )}
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="container-title-wrapper">
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
            <p>
              Because <span>♢</span> Everyone <span>♢</span> Deserves
              <span>♢</span> a Second <span>♢</span> Chance
            </p>
            <svg viewBox="0 3 100 14">
              <path
                fill="#ffffff"
                d="M0 30 V12 Q30 17 55 12 T100 11 V30z"
              ></path>
            </svg>
          </div>

          <section id="budge-info" className="table-container">
            <div>
              <h3>Budget Table</h3>
            </div>
            <div className="table__btn-container">
              <a className="table__btn-add" href="/budgets/new">
                Add Item
              </a>
            </div>
            <table>
              <tr>
                <th className="table-title">
                  <i className="fas fa-calendar-check"></i> date
                </th>
                <th className="table-title">
                  <i className="fas fa-clipboard-list"></i> name
                </th>
                <th className="table-title">
                  <i className="fas fa-file-invoice-dollar"></i> amount
                </th>
                <th className="table-title">
                  <i className="fas fa-trash"></i> delete
                </th>
              </tr>

              <tr>
                {Budget.map((data, index) => {
                  return (
                    <tr>
                      <td>{data.date}</td>
                      <td>
                        <a href={`budgets/${index}`}>{data.name}</a>
                      </td>
                      <td>{data.amount}</td>

                      <td>
                        <form
                          className="table__form-delete"
                          action={`/budgets/${index}?_method=DELETE`}
                          method="POST"
                        >
                          <button className="table__btn-delete" type="submit">
                            <i className="fas fa-trash"></i>{" "}
                          </button>
                        </form>
                      </td>
                    </tr>
                  );
                })}
              </tr>
            </table>
          </section>
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
module.exports = Budget;
