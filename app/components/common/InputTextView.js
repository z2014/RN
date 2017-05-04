import React,{ Component } from 'react';
import { Text,TextInput,View,StyleSheet,Alert,Image,TouchableOpacity } from 'react-native';
import EditPage from './EditPage';

export default class inputTextView extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
  		text:''
  	};
    this.pressImg = this.pressImg.bind(this)
  }
  render () {
  	return (
  	  <View style={styles.viewText}>
        <TouchableOpacity onPress={() => this.showDrawer()}>
          <Image source={require('../../../public/images/1.jpg')} style={styles.icon}/>
        </TouchableOpacity>
  	    <TextInput placeholder="搜索你感兴趣的话题" multiline={true} selectionColor="blue"
  	    underlineColorAndroid="transparent"
  	    textAlignVertical="bottom"
  	    onChangeText={(text) => this.setText(text)}
  	    onEndEditing={() => this.submit()}
  	    style={styles.inputText}/>
        <TouchableOpacity onPress={() => this.pressImg()}>
          <Image source={require('../../../public/images/write.png')} 
               style={styles.icon}/>
        </TouchableOpacity>
  	  </View>
  	)
  }
  showDrawer () {
    this.props.navigation.navigate('DrawerOpen')
  }
  pressImg () {
    const { navigate } = this.props.navigation;
    navigate('Edit')
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
  	width:250,
  	height:40,
  	backgroundColor:'#eee',
  	borderRadius:10
  },
  icon: {
    width:40,
    height:40,
    borderRadius:20
  }
})
