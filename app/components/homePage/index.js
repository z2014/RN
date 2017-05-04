import SearchInput from './SearchInput';
import ContentView from './ContentView';
import React,{ Component } from 'react';
import { Text,View,StyleSheet,ListView,Image,ScrollView } from 'react-native';
import EditPage from '../common/EditPage';
import MyCollection from './MyCollection';
import MyLive from './MyLive';
import { DrawerNavigator,DrawerItems } from 'react-navigation';
// import CustomDrawerContentComponent from './DrawerItem'

class HomePage extends Component{
  static navigationOptions = {
    drawerLabel: '首页',
    drawerIcon: ({ tintColor }) => (
      <Image source={require('../../../public/images/1.jpg')} style={styles.icon}/>
    )
  }
  render () {
  	return (
  		<View style={{ flex:1 }}>
  		  <SearchInput navigation={this.props.navigation}/>
  		  <View style={{flex:1}}>
  		    <ContentView/>
  		  </View>
  		</View>
  	)
  }
}

export default class Home extends Component {
  render () {
    const Home = DrawerNavigator({
      Home: { screen: HomePage },
      Edit: { screen: EditPage },
      MyCollection: { screen: MyCollection },
      MyLive: { screen: MyLive }
    },{
      contentComponent: props => <CustomDrawerContentComponent {...props}/>,
      contentOptions: {
        style: {
          marginTop: 20,
          marginBottom: 20,
          backgroundColor: 'white'
        }
      }
    })
    return (
      <Home/>
    )
  }
}

const CustomDrawerContentComponent = (props) => (
  <View style={styles.wrapper}>
    <View style={styles.item}>
      <Image source={require('../../../public/images/1.jpg')} style={styles.avatorBlock}/>
      <Text style={styles.name}>张春林</Text>
    </View>
    <View style={styles.drawerItem}>
      <DrawerItems {...props}/>
    </View>
  </View>
)

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    paddingLeft: 20
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 50
  },
  avatorBlock: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  name: {
    fontSize: 25
  },
  drawerItem: {
    backgroundColor: 'white'
  }
})