class RouterConfig {
  // forward, backward
  static transition: 'none';
  static openNewPage = (history, pathname) => {
    RouterConfig.transition = 'forward';
    history && history.push({
      pathname: pathname
    })
  }
  static goBack = (history) => {
    RouterConfig.transition = 'backward';
    history.goBack();
  }
}

export default RouterConfig;
