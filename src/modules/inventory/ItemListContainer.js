import React, { Component, PropTypes } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import store from './store'

class Item extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
  }

 componentDidMount() {
    axios.post('https://colppy.local/lib/frontera2/service.php',
      {
        "auth": {
          "usuario": "?",
          "password": "?"
        },
        "service": {
          "provision": "inventario",
          "operacion": "?"
        },
        "options": {

        },
        "parameters": {

        }
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => {
        const items = res.data.data.children.map(obj => obj.data);
        this.setState({ items });
         console.log(items);
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Items</h1>
      </div>
    );
  }
}

export default Item;

Item.PropTypes = {

}
