import React,{ Component } from 'react';
import { Text,TouchableOpacity,Alert,Image,StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Edit extends Component{
	static navigationOptions = {
	    drawerLabel: '编辑',
	    drawerIcon: ({ tintColor }) => (
	      <Image source={require('../../../public/images/1.jpg')} style={styles.icon}/>
	    )
	  }
	render () {
		return (
			<TouchableOpacity onPress={() => this.pressBtn()}>
		        <Text>hahahadkdkkkkkkkdkdkdkdkdkdkdkdk打卡打卡打卡打卡</Text>
		    </TouchableOpacity>
		)
	}
	pressBtn () {
		this.props.navigation.goBack()
	}
}

const styles = StyleSheet.create({
  icon: {
  	width: 40,
  	height: 40
  }
})
