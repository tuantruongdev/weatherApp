import  NewLocationAddComponet  from "../components/NewLocationAddComponet";
import { addNewTask } from "../actions";
import { connect  } from "react-redux";
import {getWeather} from "../network/netWork"
const mapStateToProps= state=>{
    return{

    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        onClickAdd:(inputTaskName,cityName,cityTemp)=>{

           var data={}
           
             getWeather(inputTaskName).then((weatherData)=>{
                data=weatherData;
              
                dispatch(addNewTask(inputTaskName,data.name,data.main.temp,data.weather[0].description,data));

             });
           // alert(JSON.stringify(data));
           
                //alert(inputTaskName);
        }
 
    } 



}
const NewLocationAddContainer  = connect(mapStateToProps,mapDispatchToProps)(NewLocationAddComponet);
export default NewLocationAddContainer;