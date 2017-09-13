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
  // Perhaps fetch some data here
  for (let i = 1; i < 10; i++) {
  fetch(`https://swapi.co/api/people/${i}/`).then((response) => {
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
    let indexNumber = [];
    let mass = [];
    let height = [];

   this.state.list.forEach((item, index) => {
   nameList.push(<li key={index}>{item.name}</li>);
     mass.push(<li key={index}>{item.mass}</li>);
     height.push(<li key={index}>{item.height}</li>);
   });

    return (
      <div style={styles}>
          <h1>Star Wars Blog</h1>
        <div id='table'>
          <table>
            <tbody>
              <tr>
                <th>Names:</th>
                <th>Mass:</th>
                <th>Height:</th>
              </tr>
              <tr>
                <td>{nameList}</td>
                <td>{mass}</td>
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

// render -- this.state line -    content.push<(<div key={index}</div>

  // return - {content} -  under div style table
