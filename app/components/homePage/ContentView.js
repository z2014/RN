import React,{ Component } from 'react';
import { Text,View,StyleSheet,ListView,Image,RefreshControl,TouchableNativeFeedback } from 'react-native';

export default class ContentView extends Component{
  constructor(props) {
  	super(props);
  	const ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2});
  	this.state = {
      isRefreshing:false,
  		dataSource: ds.cloneWithRows([
        {topic:'前端开发',people:10,author:'2014',headline:'超级有用的前端技术超级有用的前端技术面试问题收集',like:20,txt:'超级有用的前端技超级有用的前端技超级有用的前端技慕课网(IMOOC)是学习css3视频教程等课程资源。'},
        {topic:'前端开发',people:10,author:'2014',headline:'超级有用的前端技术超级有用的前端技术面试问题收集',like:20,txt:'超级有用的前端技超级有用的前端技超级有用的前端技慕课网(IMOOC)是学习css3视频教程等课程资源。'},
        {topic:'前端开发',people:10,author:'2014',headline:'超级有用的前端技术超级有用的前端技术面试问题收集',like:20,txt:'超级有用的前端技超级有用的前端技超级有用的前端技慕课网(IMOOC)是学习css3视频教程等课程资源。'},
        {topic:'前端开发',people:10,author:'2014',headline:'超级有用的前端技术超级有用的前端技术面试问题收集',like:20,txt:'超级有用的前端技超级有用的前端技超级有用的前端技慕课网(IMOOC)是学习css3视频教程等课程资源。'},
        {topic:'前端开发',people:10,author:'2014',headline:'超级有用的前端技术超级有用的前端技术面试问题收集',like:20,txt:'超级有用的前端技超级有用的前端技超级有用的前端技慕课网(IMOOC)是学习css3视频教程等课程资源。'},
        {topic:'前端开发',people:10,author:'2014',headline:'超级有用的前端技术超级有用的前端技术面试问题收集',like:20,txt:'超级有用的前端技超级有用的前端技超级有用的前端技慕课网(IMOOC)是学习css3视频教程等课程资源。'}
      ])
  	};
    this.updateList = this.updateList.bind(this);
  }
  updateList() {
    this.setState({
      isRefreshing:true
    })
    setTimeout(function() {
      this.setState({
        isRefreshing:false
      })
    }.bind(this),2000);
  }
  render () {
  	return (
  	  <View>
  	    <ListView
  	      dataSource={this.state.dataSource}
  	      renderRow={(rowData) => <ShowItem data={rowData}/>}
          refreshControl={
            <RefreshControl
              onRefresh={this.updateList}
              refreshing={this.state.isRefreshing}
              colors={['#eee']}
            />
          }
  	    />
  	  </View>
  	)
  }
}

function ShowItem(props) {
	return (
    <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
  		<View style={styles.wrapper} ref={this.topic}>
        <View style={styles.header}>
          <Image source={require('../../../public/images/1.jpg')} style={styles.avator}/>
          <Text style={styles.author}>{props.data.author}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.leftView}>
            <Text style={styles.headline}>{props.data.headline}</Text>
            <Text style={styles.txt}>{props.data.txt}</Text>
          </View>
          <View style={styles.rightView}>
            <Image source={require('../../../public/images/bg.jpg')} style={styles.bg}/>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.item}>
            <Image source={require('../../../public/images/like.png')} style={styles.icon}/>
            <Text>{props.data.like}</Text>
          </View>
          <View style={styles.item}>
            <Text>{`来自话题：${props.data.topic}`}</Text>
          </View>
          <View style={styles.item}>
            <Image source={require('../../../public/images/join.png')} style={styles.icon}/>
            <Text>{props.data.people}</Text>
          </View>
        </View>
  		</View>
    </TouchableNativeFeedback>
	)
}

const styles = 	StyleSheet.create({
  wrapper: {
    flex:1,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    padding: 5,
    height: 150,
    backgroundColor: '#ccc',
    justifyContent: 'space-around'
  },
  leftView: {
    width: '60%',
  },
  rightView: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '25%'
  },
  body: {
    height: '55%',
    flexDirection: 'row'
  },
  txt: {
    overflow: 'hidden',
    maxHeight: '65%'
  },
  headline: {
    fontSize: 16,
    fontWeight: 'bold',
    //maxHeight: '50%'
  },
  footer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  avator: {
    width:40,
    height:40,
    borderRadius:20,
    marginRight: 20
  },
  icon: {
    width: 20,
    height: 20
  },
  bg: {
    width: '100%',
    height: '80%'
  }
})