import SearchInput from './SearchInput';
import ContentView from './ContentView';
import React,{ Component } from 'react';
import { Text,View,StyleSheet,ListView } from 'react-native';

export default class HomePage extends Component{
  render () {
  	return (
  		<View style={{ flex:1 }}>
  		  <SearchInput/>
  		  <View style={{flex:1}}>
  		  <ContentView/>
  		  </View>
  		</View>
  	)
  }
}