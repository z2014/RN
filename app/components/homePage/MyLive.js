import { View,Image,StyleSheet,Text } from 'react-native';
import React,{ Component } from 'react';

export default class MyCollection extends Component{
	static navigationOptions = {
    drawerLabel: '我发起的live',
    drawerIcon: ({ tintColor }) => (
      <Image source={require('../../../public/images/1.jpg')} style={styles.icon}/>
    )
  }
	render () {
		return (
      <Text>My live</Text>
		)
	}
} 

const styles = StyleSheet.create({
  container: {
  	flex: 1
  },
  icon: {
  	width: 40,
  	height: 40
  }
})