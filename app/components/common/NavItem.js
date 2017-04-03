import React, { Component } from 'react';
import { Button, Text, StyleSheet, View } from 'react-native';


export default class NavItem extends Component {
  render() {
    return (
      <View style={ navStyle.wrapper }>
        <Text
          style={navStyle.item}
          onPress={ this.toggle.bind(this) }
        >
          <Text> { this.props.title } </Text>
        </Text>
      </View>
    );
  }
  toggle() {
    const route = this.props.route;
    const navigator = this.props.navigator;
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