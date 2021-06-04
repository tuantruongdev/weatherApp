import { registerRootComponent } from 'expo';

import App from './App';
import React,{Component} from 'react';
import {createStore} from "redux";
import { Provider } from "react-redux"
import  allReducers     from "./reducers/index";
import  MainManagerComponets from "./components/MainManagerComponets";
import { StatusBar } from 'expo-status-bar';

let store = createStore(allReducers);
export default class ViewMain extends  Component{
 
    render(){
        return(

            <Provider store={store}>
                 <StatusBar style="dark" />
            <MainManagerComponets></MainManagerComponets>
        
        </Provider>
        )

    }
  


}