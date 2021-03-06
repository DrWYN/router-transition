import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import AnimatedRouter from './lib/AnimatedRouter.js';

const Loading = (props) => {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return <div>Loading ing ing..</div>;
  }
}

const AsyncList = Loadable({
  loader: () => import('./list' /* webpackChunkName:list */),
  delay: 1000,
  loading: Loading
});

const AsyncItem = Loadable({
  loader: () => import('./item' /* webpackChunkName:list */),
  delay: 1000,
  loading: Loading
  // loading: () => (<div className="transition-item" style={{height: '1000px', backgroundColor: '#000'}}>loading</div>)
});
// import List from "./list";
// import Item from "./item";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  componentDidMount() {
    console.log('--->>>>>did', 11);
  }

  render() {
    return (
      <Router>
        <Route
          render={({ location, history }) => (
              <AnimatedRouter location={location} timeout={300}>
                <Route exact path="/" component={AsyncList} />
                {/* <Route path="/list" component={List}/> */}
                <Route path="/item/:id?" component={AsyncItem} />
              </AnimatedRouter>
          )}
        />
      </Router>
    );
  }
}

export default App;

