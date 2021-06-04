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
  TouchableOpacity
} from 'react-native';
import {
  ListItem,
  Avatar,
  SearchBar
} from 'react-native-elements'

import { round } from 'react-native-reanimated';
const listInfo = [{
    avatar_url: 'https://sohbetv1.com/wp-content/uploads/2019/09/Mark_Zuckerberg_F8_2018_Keynote_cropped_2.jpg',
    coord: "truong dep trai",
    sub: "CTO"
  },
  {
    avatar_url: 'https://sohbetv1.com/wp-content/uploads/2019/09/Mark_Zuckerberg_F8_2018_Keynote_cropped_2.jpg',
    coord: "Mark Zuckerberg",
    sub: "CEO"

  }

]



export default class mainView extends Component {



  
  constructor(props) {
    super(props);
    this.state = ({

      weatherFromApi: [],
      filterData:[],
      masterData:[],
      searchVal:""
    })

  }
  componentDidMount() {
   this.refreshDataWeather();
  }
 async refreshDataWeather () {
   getWeather().then((weatherInfo) => {
    
     let test=[];
     test.push({id:"1",name:'tp',main:{temp:300.15} });
     test.push({id:"2",name:'tp1',main:{temp:305.15} });
     test.push({id:"3",name:'tp2',main:{temp:310.15} });
    // console.log(test)

    
    this.setState({
      weatherFromApi: weatherInfo,
        filterData :weatherInfo,
        masterData:weatherInfo,
      });

     
  //    console.log((weatherInfo ))

    }).catch((error) => {
   
      console.error(`err`);
    })


  }

  



  render() {
    
   
   
    const searchFilter=(text)=>{
      if(text){
        const newData= this.state.masterData.filter((item)=>{
          const itemData= item.name ? item.name.toUpperCase()
          :''.toUpperCase();
          const textData=text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
        this.setState({ filterData: newData , searchVal:text});

      }else{
        this.setState({ filterData: this.state.masterData , searchVal:text});


      }
    }

    const Msearchbar =()=>{
      const [searchTxt,setSearchTxt]=  useState("");
      return(
        <View>
       
      </View>
      );
    
    
    }

    const Item = ({title}) => ( <View

      style={{height:80,marginBottom:5}}
    >
     
      <ImageBackground source={require("../images/windy.jpg")}
      style={{flexDirection:'row',
        resizeMode: "cover",
        justifyContent: "center"}}>
      <View style={{flex:7}}>
      
      <View
       style={{justifyContent:"center",width:"100%",height:"100%"}}
      >
      <Text style={styles.cityName}> {title.name }</Text> 
      </View>
      </View>

      <View
      style={{justifyContent:"center",flex:3,alignItems:"center",height:"100%",width:"100%"}}
      
      >
      <Text style={styles.paragraph}> { Math.round (title.main.temp - 273.15) } °C</Text> 
      </View>
      </ImageBackground>
      </View>

    );


    const renderItem = ({item}) => ( <Item title = {item } />);

    const onPress = () => {
     
      //  console.log(this.state.weatherFromApi[0].cod);
      this.forceUpdate();
   //this.componentDidMount();

    }

    return ( <View >




<SearchBar
        platform="default"
      
        onChangeText={text=> searchFilter(text)}
        onClearText={() => console.log(onClearText())}
        placeholder="Type query here..."
        placeholderTextColor="#888"
        cancelButtonTitle="Cancel"
       
        onCancel={() => console.log(onCancel())}
        value={this.state.searchVal}
      />
      <FlatList 
      data = {this.state.filterData}
      renderItem = {renderItem}
      keyExtractor = {item => item.id+""}/>
  <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      </View>
    );
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
  button: {
  
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }, 
});
