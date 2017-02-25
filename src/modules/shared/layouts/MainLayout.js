import React, { Component } from 'react';
import Navbar from 'modules/shared/ui/navbar';

class MainLayout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Navbar />
        </div>
        {this.props.children}
      </div>
    );
  }
}
export default MainLayout;

