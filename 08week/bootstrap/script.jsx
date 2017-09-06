'use strict';

class Page extends React.Component {
constructor(props) {
super(props);
}

render() {
return (
<div className="container">
<div className="main-img">
  <h1>Do What Now?</h1>
</div>
<div className="row">
  <div className="col">
    <ReactForm color ="azure" height="200" />
    <span> Lorem ipsum dolor sit amet, consectetur laoreet id donec ultries tincindunt arcu nonment</div>
  </div>
  <div className="col"><span> Lorem ipsum dolor sit amet, consectetur laoreet id donec ultries tincindunt arcu nonment</div>
</div>
</div>
</div>
});
)
}
class Page extends React.Component {
constructor(props) {
super(props);

this.state = {
  submitted: false,
  color: this.props.color
};
this.submit = this.submit.bind(this);
}
render() {
  if (!this.state.submitted) {
    return (
      <form className={this.state.color}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name"/>
        <label htmlFor="name">Age:</label>
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" />
        <button type="submit" className="btn btn-primary" onClick={this.submit}What?</button>
      </form>
    );
  } else {
    return (<h1>Form Submitted</h1>);
  }
  }
  submit () {
    this.setState((state) => {
      state.submitted = !state.submitted;
    });
    }
  }
}
ReactDOM.render(<Page />, document.getElementById('container'));
