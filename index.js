import { registerRootComponent } from 'expo';

import App from './App';
import React from 'react';
import {createStore} from "redux";
import { Provider } from "react-redux"
import  allReducers     from "./reducers/index";
import  MainManagerComponets  from "./components/MainManagerComponets";
import { render } from 'react-dom';
import  ViewMain  from "./ViewMain";
let store = createStore(allReducers);
const mainApp=()=>{
   
   return(
    <Provider store={store}>
        <MainManagerComponets></MainManagerComponets>

    </Provider>
   );

}; 
// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately
registerRootComponent(ViewMain);
//AppRegistry.registerComponent('main', () => mainApp);