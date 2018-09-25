import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import randomColor from "randomcolor";
import RouterConfig from './lib/routerConfig.js';

class Item extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log('--->>>>>>this.props = ', this.props);
    return (
      <div className="detail-page">
        <div onClick={this.goBack.bind(this)}>
          <p style={{ padding: 10, backgroundColor: randomColor() }}>
            This is an Item. Click here to go back.
          </p>
        </div>
      </div>
    );
  }

  goBack() {
    const {match = {}} = this.props;
    const {params = {}} = match;
    const {id = '0'} = params;
    if (parseInt(id) < 3) {
      const nextId = parseInt(id) + 1;
      RouterConfig.openNewPage(this.props.history, `/item/${nextId}`);
    } else {
      RouterConfig.goBack(this.props.history);
    }
  }
}

export default Item;

