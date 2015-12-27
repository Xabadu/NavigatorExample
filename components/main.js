'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  View,
} = React;

var Login = require('./login');
var Signup = require('./signup');
var Dashboard = require('./dashboard');

var ROUTES = {
  login: Login,
  signup: Signup,
  dashboard: Dashboard
};

module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component {...route.props} route={route} navigator={navigator} />
  },
  render: function() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'login'}}
        renderScene={this.renderScene}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
