import React,{ Component } from 'react';
import { Text,View,StyleSheet,ListView,Image } from 'react-native';

export default class ContentView extends Component{
  constructor(props) {
  	super(props);
  	const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
  	this.state = {
  		dataSource: ds.cloneWithRows([
        {topic:'前端开发',headline:'超级有用的前端技术面试问题收集',like:20,txt:'慕课网(IMOOC)是学习编程最简单的免费平台。慕课网提供了丰富的移动端开发、php开发、web前端、html5教程以及css3视频教程等课程资源。'},
        {topic:'前端开发',headline:'超级有用的前端技术面试问题收集',like:20,txt:'慕课网(IMOOC)是学习编程最简单的免费平台。慕课网提供了丰富的移动端开发、php开发、web前端、html5教程以及css3视频教程等课程资源。'},
        {topic:'前端开发',headline:'超级有用的前端技术面试问题收集',like:20,txt:'慕课网(IMOOC)是学习编程最简单的免费平台。慕课网提供了丰富的移动端开发、php开发、web前端、html5教程以及css3视频教程等课程资源。'}
  		])
  	};
  }
  render () {
  	return (
  	  <View >
  	    <ListView
  	      dataSource={this.state.dataSource}
  	      renderRow={(rowData) => <ShowItem data={rowData}/>}
  	    />
  	  </View>
  	)
  }
}

function ShowItem(props) {
	return (
		<View style={styles.wrapper}>
		  <Image source={require('../../../public/images/1.jpg')} style={styles.icon}/>
		  <Text>{props.data.topic}</Text>
		  <Text>{props.data.headline}</Text>
		  <Text>{props.data.like}</Text>
		  <Text>{props.data.txt}</Text>
		</View>
	)
}

const styles = 	StyleSheet.create({
  wrapper: {
    marginTop:5,
    marginBottom:5,
    backgroundColor:'blue'
  },
  icon: {
    width:40,
    height:40,
    borderRadius:20
  }
})