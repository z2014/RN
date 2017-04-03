import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  StatusBar,
  Text
} from 'react-native';
import HomePage from './app/components/homePage/index';
import NavigatorBar from './app/components/common/NavigatorBar';
import UserInfo from './app/components/userInfo/index';
import Written from './app/components/written/index';

const pageList = { HomePage,UserInfo,Written };
const default_page = HomePage;

export default class AwesomeProject extends Component {
  render() {
    const renderScene = (route,navigator) => {
      let Component = route.component;
      const PageComponent = pageList[route.scene];
      return <Component {...route.params} navigator={navigator}/>
    };
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
        <Navigator
          initialRoute={{name:'default_page',index: 0}}
          renderScene={renderScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
