'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("div", { "data-cell": "0", onClick: this.makeMove }),
        React.createElement("div", { "data-cell": "1", onClick: this.makeMove }),
        React.createElement("div", { "data-cell": "2", onClick: this.makeMove })
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("div", { "data-cell": "3" }),
        React.createElement("div", { "data-cell": "4" }),
        React.createElement("div", { "data-cell": "5" })
      ),
      React.createElement(
        "div",
        { className: "row" },
        React.createElement("div", { "data-cell": "6" }),
        React.createElement("div", { "data-cell": "7" }),
        React.createElement("div", { "data-cell": "8" })
      )
    );
  }
}

ReactDOM.render(React.createElement(TicTacToe, null), document.getElementById('tic-tac-toe'));