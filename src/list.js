import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import randomColor from "randomcolor";
import Loadable from 'react-loadable';
import RouterConfig from './lib/routerConfig.js';

class List extends Component {
  componentDidMount() {
    console.log('--->>>>>did', 33);
    // Loadable.preloadAll();
  }
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
          onClick={this.goToItem.bind(this, index)}
          style={{ padding: 10, backgroundColor: randomColor() }}
        >
          This is a paragraph - {item}
        </div>
      );
    });
    return <div className="list-page">{listItems}</div>;
  }

  goToItem(index) {
    RouterConfig.openNewPage(this.props.history, `/item/${index}`);
  }
}

export default List;

