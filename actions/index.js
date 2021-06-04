import{ADD_NEW_TASK,TOGGLE_ONE_TASK} from "./actionTypes"
let newTaskID=0;

export const addNewTask=(inputTaskName,cityName,cityTemp,description,data)=>{
  //  alert(JSON.stringify(data));
return{
    type: ADD_NEW_TASK,
    taskId: newTaskID++,
    taskName: inputTaskName,
    cityName: cityName,
    cityTemp:cityTemp,
    description:description,
    data:data

}}
export const toggleTask= (taskId)=>{
    return{
        type: TOGGLE_ONE_TASK,
        taskId: taskId,
    }
}


