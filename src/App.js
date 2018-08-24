import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import PageTransition from "./lib/PageTransition.js";

const AsyncList = Loadable({
  loader: () => import('./list' /* webpackChunkName:list */),
  loading: () => (<div>loading</div>)
});

const AsyncItem = Loadable({
  loader: () => import('./item' /* webpackChunkName:list */),
  loading: () => (<div>loading</div>)
});
// import List from "./list";
// import Item from "./item";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <Router>
        <Route
          render={({ location, history }) => (
            <PageTransition 
              timeout={500} 
              animateOnInit={false}
              history={history}>
              <Switch location={location}>
                <Route exact path="/" component={AsyncList} />
                {/* <Route path="/list" component={List}/> */}
                <Route path="/item" component={AsyncItem} />
              </Switch>
            </PageTransition>
          )}
        />
      </Router>
    );
  }
}

export default App;

