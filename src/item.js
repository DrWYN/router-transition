import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import randomColor from "randomcolor";

class Item extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("render item");
    return (
      <div className="transition-item detail-page">
        <div onClick={this.goBack.bind(this)}>
          <p style={{ padding: 10, backgroundColor: randomColor() }}>
            This is an Item. Click here to go back.
          </p>
        </div>
      </div>
    );
  }

  goBack() {
    this.props.history.goBack();
  }
}

export default Item;

