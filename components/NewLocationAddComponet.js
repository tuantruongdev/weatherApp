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
    TouchableOpacity
  } from 'react-native';
  import {
    ListItem,
    Avatar,
    SearchBar,
    Button,
    Input
  } from 'react-native-elements'
import { addNewTask } from "../actions";
import Icon from "react-native-vector-icons/FontAwesome5";
export default class NewLocationAddComponet extends Component{

    constructor(props){
        super(props);
        this.state=({
                newLocationText:'1816670',
        })
    }
  


    
    
    render(){
        return(
            <View style={{  }}>

              <View style={{flexDirection:"row"}}>
              <View style={{flex:8}}>
              <Input
      containerStyle={{}}
      disabledInputStyle={{ background: "#ddd" }}
      inputContainerStyle={{}}

      inputStyle={{   marginLeft:10 }}
  
      leftIcon={<Icon name="map-marked-alt" size={20} />}
      leftIconContainerStyle={{}}
      onChangeText={text=>this.setState({newLocationText:text})}

      rightIconContainerStyle={{}}
      placeholder="City ID,eg:1816670,1796236,1566083"
    />
      </View>
                
          

<View style={{flex:2}}>
<Button
      buttonStyle={{ }}
      containerStyle={{ margin: 5 }}
      disabledStyle={{
        borderWidth: 2,
        borderColor: "#00F"
      }}
      disabledTitleStyle={{ color: "#00F" }}
      linearGradientProps={null}
    
      iconContainerStyle={{ background: "#000" }}
      loadingProps={{ animating: true }}
      loadingStyle={{}}
      onPress={()=>{ this.props.onClickAdd(this.state.newLocationText) }}
      title="ADD"
      titleProps={{}}
      titleStyle={{ marginHorizontal: 5 }}
    />

</View>
</View>
</View>

        );


    }


}