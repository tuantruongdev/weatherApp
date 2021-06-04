import React, {
    Component
} from 'react';
import { SliderComponent } from 'react-native';
import {
    AppRegistry,
    SectionList,
    StyleSheet,
    Text,
    View,
    Alert,
    Platform
} from 'react-native';
const weatherApi = "https://api.openweathermap.org/data/2.5/weather?id=1581130&lang=vi&appid=1d23c02a4a4e90eaa30a497f0df05407";
async function getWeather(id) {
   //let citiesList=[1816670,1796236,1566083,5202009,1880252,5128581];
 
   let data={};
    try {

      
       
        let reponse = await fetch("https://api.openweathermap.org/data/2.5/weather?id="+id+"&lang=vi&appid=1d23c02a4a4e90eaa30a497f0df05407");
        let jsonReponse = await reponse.json();
        
       
    
        
           data=jsonReponse ; 
    //   alert(JSON.stringify(data));

           

       
       
    
        

    } catch (error) {
        console.error(`"loi~ :" ${error}`);

    }
 //console.log(data.length);
    
//  Promise.resolve(data);
  return data;

}
export {
    getWeather
};
/*

async function getWeather() {
   //let citiesList=[1816670,1796236,1566083,5202009,1880252,5128581];
   let citiesList=[1816670,1796236,1566083,5202009,1880252,5128581];
   let data=[];
    try {

       citiesList.forEach(async element => {
       
        let reponse = await fetch("https://api.openweathermap.org/data/2.5/weather?id="+element+"&lang=vi&appid=1d23c02a4a4e90eaa30a497f0df05407");
        let jsonReponse = await reponse.json();
        
       
    
        
           data.push(jsonReponse) ; 
        

           

       });
       
    
        

    } catch (error) {
        console.error(`"loi~ :" ${error}`);

    }
 //console.log(data.length);
    
//  Promise.resolve(data);
  return data;

}
export {
    getWeather
};
*/