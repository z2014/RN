import React,{ Component } from 'react';
import { Text,TextInput,View,StyleSheet,Alert,Image } from 'react-native';

export default class inputTextView extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
  		text:''
  	};
  }
  render () {
  	return (
  	  <View style={styles.viewText}>
  	    <TextInput placeholder="搜索你感兴趣的话题" multiline={true} selectionColor="blue"
  	    underlineColorAndroid="transparent"
  	    textAlignVertical="bottom"
  	    onChangeText={(text) => this.setText(text)}
  	    onEndEditing={() => this.submit()}
  	    style={styles.inputText}/>
        <Image source={require('../../../public/images/write.png')} style={styles.icon}/>
  	  </View>
  	)
  }
  setText (text) {
  	this.setState({
  		text
  	})
  }
  submit () {
  	Alert.alert(
  		'Alert Title',
      'kkkk',
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
        {text: 'OK', onPress: () => console.log('OK Pressed!')},
      ]
    );
  }
}


const styles = 	StyleSheet.create({
  viewText: {
  	borderColor: '#eee',
  	borderWidth: 1,
  	height:60,
  	flexDirection:'row',
  	alignItems:'center',
  	justifyContent:'space-around'
  },
  inputText: {
  	width:300,
  	height:40,
  	backgroundColor:'#eee',
  	borderRadius:10
  },
  icon: {
    width:30,
    height:30
  }
})