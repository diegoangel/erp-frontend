import React from 'react';
import { Component } from 'react';
import 'stylesheets/main.scss';

class App extends Component {
	componentWillMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default App