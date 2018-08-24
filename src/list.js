import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import randomColor from "randomcolor";

class List extends Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    console.log("render list");
    let arr = [1, 2, 3, 4, 5, 6];
    let listItems = arr.map((item, index) => {
      return (
        <div
          key={index}
          onClick={this.goToItem.bind(this)}
          style={{ padding: 10, backgroundColor: randomColor() }}
        >
          This is a paragraph - {item}
        </div>
      );
    });
    return <div className="transition-item list-page">{listItems}</div>;
  }

  goToItem() {
    this.props.history.push({
      pathname: "/item"
    });
  }
}

export default List;

