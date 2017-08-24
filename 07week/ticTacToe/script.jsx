'use strict';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    playerTurn: 'X'
    };
    this.makeMove = this.makeMove.bind(this);
  }

  render() {
  if (this.state.playerTurn === 'X') {
    return (
      <div>
        <div className="row">
          <div data-cell="0" onClick={this.makeMove}></div>
          <div data-cell="1" onClick={this.makeMove}></div>
          <div data-cell="2" onClick={this.makeMove}></div>
        </div>
        <div className="row">
          <div data-cell="3" onClick={this.makeMove}></div>
          <div data-cell="4" onClick={this.makeMove}></div>
          <div data-cell="5" onClick={this.makeMove}></div>
        </div>
        <div className="row">
          <div data-cell="6" onClick={this.makeMove}></div>
          <div data-cell="7" onClick={this.makeMove}></div>
          <div data-cell="8" onClick={this.makeMove}></div>
        </div>
      </div>

    makeMove(e) {
    e.target.innerHTML = this.state.playerTurn;
    this.SetState(oldState) => {
    return oldState.playerTurn = (oldState.playerTurn === 'X') ? 'O' : 'X';
    }
    }
  }
}

ReactDOM.render(<TicTacToe />, document.getElementById('tic-tac-toe'));
