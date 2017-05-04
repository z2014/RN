import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Text,
  Image
} from 'react-native';


import Home from './app/components/homePage/index';
import EditPage from './app/components/common/EditPage';

import TabNavigator from 'react-native-tab-navigator';
import UserInfo from './app/components/userInfo/index';
import Written from './app/components/written/index';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home'
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            title="主页"
            selected={this.state.selectedTab === 'home'}
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.textStyle}
            style={styles.tabNav}
            renderIcon={() => <Image source={require("./public/images/home.png")} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require("./public/images/home-active.png")} style={styles.iconStyle}/>}
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <Home/>
          </TabNavigator.Item>
          <TabNavigator.Item
            title="发起"
            selected={this.state.selectedTab === 'written'}
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.textStyle}
            style={styles.tabNav}
            renderIcon={() => <Image source={require("./public/images/edit.png")} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require("./public/images/edit-active.png")} style={styles.iconStyle}/>}
            onPress={() => this.setState({ selectedTab: 'written' })}>
            <Written/>
          </TabNavigator.Item>
          <TabNavigator.Item
            title="我的"
            selected={this.state.selectedTab === 'userinfo'}
            selectedTitleStyle={styles.selectedTextStyle}
            titleStyle={styles.textStyle}
            style={styles.tabNav}
            renderIcon={() => <Image source={require("./public/images/user.png")} style={styles.iconStyle}/>}
            renderSelectedIcon={() => <Image source={require("./public/images/user-active.png")} style={styles.iconStyle}/>}
            onPress={() => this.setState({ selectedTab: 'userinfo' })}>
            <UserInfo/>
          </TabNavigator.Item>
        </TabNavigator>
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
  iconStyle: {
    width:30,
    height:30
  },
  // tabNav: {
  //   backgroundColor: 'red'
  // }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
