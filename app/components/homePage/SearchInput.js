import React,{ Component } from 'react';
import { Text,TextInput,View,StyleSheet } from 'react-native';
import InputTextView from '../common/InputTextView.js';

export default class SearchInput extends Component{
  render () {
  	return (
  	  <View >
  	    <InputTextView url="url"/>
  	  </View>
  	)
  }
}