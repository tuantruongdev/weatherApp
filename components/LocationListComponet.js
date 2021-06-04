import {
  StatusBar
} from 'expo-status-bar';
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
  Image
} from 'react-native';
import {
  ListItem,
  Avatar,
  SearchBar,
  
} from 'react-native-elements'

export default class LocationListContainers extends Component{
    render(){
      
    const Item = ({title}) => ( <View

      style={{height:80,marginBottom:5}}
    >
     
      <ImageBackground source={require("../images/windy.jpg")}
      style={{flexDirection:'row',
        resizeMode: "cover",
        justifyContent: "center"}}>
      <View style={{flex:7}}>
      
      <View
       style={{flexDirection:"column",justifyContent:"center",width:"100%",height:"100%"}}
      >
        <View
       style={{flexDirection:"row",alignItems:"center"}}
        >
        <Text style={styles.cityName}> {title.cityName}</Text> 
        <Image
        style={{marginLeft:10,width:25,height:15,alignSelf:"center"}}
        source={{
          uri: 'https://www.countryflags.io/'+title.data.sys.country+'/flat/64.png',
//https://purecatamphetamine.github.io/country-flag-icons/3x2/'+title.data.sys.country+'.svg

        }}
      />
        </View>
   


      <Text style={styles.description}>{title.description}</Text>
     
      </View>
      
      </View>

      <View
      style={{justifyContent:"center",flex:3,alignItems:"center",height:"100%",width:"100%"}}
      
      >
      <Text style={styles.paragraph}> { Math.round (title.cityTemp - 273.15) } °C</Text> 
      </View>
      </ImageBackground>
      </View>

    );


    const renderItem = ({item}) => ( <Item title = {item } />);

      return(
        <View>
       
        <FlatList 
        style={{marginBottom:60}}
        data = {this.props.task}
        renderItem = {(item)=>renderItem(item)}
        keyExtractor = {item => item.taskId+""}/>
</View>
        
      )


    }



}
const styles = StyleSheet.create({
  paragraph: { fontSize: 35,fontWeight:"600", color: '#FFF', textShadowColor: 'black', textShadowRadius: 1, textShadowOffset: { 
    width: 1.5,
    height: 1.5
  }}, 
  cityName: { fontSize: 25,fontWeight:"600", color: '#FFF', textShadowColor: 'black', textShadowRadius: 1, textShadowOffset: { 
    width: 1,
    height: 1
  }},
  description: { marginLeft:5, fontSize: 10,fontWeight:"bold", color: '#FFF', textShadowColor: 'black', textShadowRadius: 1, textShadowOffset: { 
    width: 1,
    height: 1
  }},
  button: {
  
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }, 
});