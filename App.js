import { StatusBar } from 'expo-status-bar';
import React,{Component,useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import MainView from "./components/mainView";
import Constants from 'expo-constants';
import { TouchableOpacity } from 'react-native';
import {
  ListItem,
  Avatar,
  SearchBar
} from 'react-native-elements'


export default class App extends Component {
  
  render(){
    
   
  return (
  
  <View
  style={styles.container}
  >

  <StatusBar style="dark" />
 
  <MainView></MainView>

  </View>
 
  );}
}

const styles = StyleSheet.create({
  container: {
    marginTop:Constants.statusBarHeight,
    width:"100%",
    height:"100%",
    backgroundColor: '#fff',
   
   
    
  },
});
