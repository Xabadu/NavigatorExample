var React = require('react-native');

var {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View
} = React;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: '',
      password: '',
    };
  },
  login: function() {
    this.props.navigator.pop();
  },
  create: function() {
    this.props.navigator.immediatelyResetRouteStack([{name: 'dashboard'}]);
  },
  render: function() {
    return (
      <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder='Username'
        clearButtonMode='while-editing'
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
      />
      <TextInput
        style={styles.textInput}
        placeholder='Password'
        clearButtonMode='while-editing'
        secureTextEntry={true}
        onChangeText={(password) => this.setState({password})}
        value={this.state.password}
      />
      <TouchableHighlight
        onPress={this.create}
        style={styles.createButton}
      >
        <Text style={styles.loginText}>
          Create account
        </Text>
      </TouchableHighlight>

      <TouchableHighlight
        onPress={this.login}
        style={styles.loginButton}
      >
        <Text style={styles.loginText}>
          Go back to login
        </Text>
      </TouchableHighlight>

      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    padding: 4,
    margin: 5,
    width: 300,
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 1
  },
  createButton: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'green',
    padding: 15,
    width: 250,
    alignItems: 'center'
  },
  loginButton: {
    backgroundColor: 'red',
    padding: 15,
    width: 250,
    marginTop: 50,
    alignItems: 'center'
  },
  loginText: {
    color: 'white'
  }
});
