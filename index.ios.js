'use strict';

var React = require('react-native');
var {
  AppRegistry
} = React;

var Main = require('./components/main');

var NavigatorExample = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component {...route.props} route={route} navigator={navigator} />
  },
  render: function() {
    return (
      <Main />
    );
  }
});

AppRegistry.registerComponent('NavigatorExample', () => NavigatorExample);
