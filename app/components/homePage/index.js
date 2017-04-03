import SearchInput from './SearchInput';
import ContentView from './ContentView';
import React,{ Component } from 'react';
import { Text,View,StyleSheet,ListView } from 'react-native';

export default class HomePage extends Component{
  render () {
  	return (
  		<View>
  		  <SearchInput/>
  		  <ContentView/>
  		</View>
  	)
  }
}