require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Home from '../page/Home.jsx'


class AppComponent extends React.Component {
  render() {
    return (
      <Home/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
