import React, {
  Component,
  useState
} from 'react';

import {
  getWeather
} from '../network/netWork'

import {
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Platform
} from 'react-native';
import {
  ListItem,
  Avatar,
  SearchBar
} from 'react-native-elements'
import  NewLocationAddContainer  from "../containers/NewLocationAddContainer";
import  LocationListContainer  from "../containers/LocationListContainer";

export default class  MainManagerComponets extends Component{
  render(){
    return(
      <View style={{flex:1,marginTop:Platform.OS==="ios"?34:45}}>
        <NewLocationAddContainer/>
        <LocationListContainer/>
      </View>


    );


  }



};