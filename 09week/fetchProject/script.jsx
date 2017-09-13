
'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const styles = require('./style.css');

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  componentWillMount() {
    for (let i = 1; i < 10; i++) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${i}/`).then((response) => {
      response.json().then((data) => {
        this.setState({
          list: this.state.list.concat([data])
        });
      });
    });
}
}
  render() {
     let nameList = [];
     let weight = [];
     let height = [];

this.state.list.forEach((item, index) => {
      nameList.push(<li key={index}>{item.name}</li>);
      weight.push(<li key={index}>{item.weight}</li>);
      height.push(<li key={index}>{item.height}</li>);
});

    return (

      <div id='style'>
        <h1>Pokémon API - Find Out More About Individual Pokémon</h1>
        <div id='table'>
          <table>
            <tbody>
              <tr>
                <th>Names:</th>
                <th>Weight(lbs):</th>
                <th>Height(ft):</th>
              </tr>
              <tr>
                <td>{nameList}</td>
                <td>{weight}</td>
                <td>{height}</td>
              </tr>
          </tbody>
          </table>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<Fetch />, document.getElementById('fetch'));
