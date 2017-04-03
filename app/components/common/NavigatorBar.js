import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import NavItem from './NavItem';

const navInfo = [{
  title: '首页',
  route: {
    scene: 'HomePage',
    index: 0
  }
}, {
  title: '发帖',
  route: {
    scene: 'Written',
    index: 1
  }
}, {
  title: '我的',
  route: {
    scene: 'UserInfo',
    index: 2
  }
}];

export default class NavigatorBar extends Component{
  render() {
  	const NavigatorBarComponent = navInfo.map((element) => {
			return <NavItem
			  key={ element.route.index }
			  title={ element.title }
			  route={ element.route }
			  navigator={ this.props.navigator }
			  />
  	});
  	return (
  		<View style={styles.navWrapper}>{NavigatorBarComponent}</View>
  	)
  }
}

const styles = StyleSheet.create({
	navWrapper: {
		'flexDirection': 'row',
		'justifyContent': 'space-around'
	}
})