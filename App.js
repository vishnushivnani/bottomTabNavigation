
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FbScreen from './screens/fbScreen';
import InstaScreen from './screens/instaScreen';

export default class App extends React.Component{
  render(){
    return(
     <AppContainer/>
    )
  }
}
const TabNavigator = createBottomTabNavigator({
  FaceBook: {
    screen:FbScreen

  },
  InstaGram :{
    screen:InstaScreen
  },

});

const AppContainer=createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
