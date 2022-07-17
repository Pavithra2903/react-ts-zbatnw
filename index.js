import React, { Component } from 'react';
import { render } from 'react-dom';
class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = { name: 'good day' };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <h1>Have a {this.state.name}</h1>
      </div>
    );
  }
}
render(<Hello />, document.getElementById('root'));
