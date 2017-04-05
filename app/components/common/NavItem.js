import React, { Component } from 'react';
import { Button, Text, StyleSheet, View ,Alert } from 'react-native';


export default class NavItem extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  render() {
    return (
      <View style={ navStyle.wrapper }>
        <Text
          style={navStyle.item}
          onPress={ this.toggle }
        >
          <Text> { this.props.title } </Text>
        </Text>
      </View>
    );
  }
  toggle() {
    const route = this.props.route;
    const navigator = this.props.navigator;
    console.log(route);
    console.log(navigator);
    if (navigator) {
      navigator.replace(route);
    }
  }
}
var navStyle = StyleSheet.create({
  wrapper: {
    'flex': 1,
    'backgroundColor': 'red'
  },
  item: {
    'textAlign': 'center',
    'height': 50,
    'lineHeight': 40,
    'fontSize': 16
  }
})