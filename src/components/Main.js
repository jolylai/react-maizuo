require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import MyLayout from './Layout.jsx'


class AppComponent extends React.Component {
  render() {
    return (
      <MyLayout/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
