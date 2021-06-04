import  LocationListComponet  from "../components/LocationListComponet";

import { connect  } from "react-redux";

const mapStateToProps= state=>{
//  alert(JSON.stringify(state));
    return{
      task :!state.taskReducers ? [] : state.taskReducers
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
       
        }
 
    } 




const LocationListContainer  = connect(mapStateToProps)(LocationListComponet);
export default LocationListContainer;