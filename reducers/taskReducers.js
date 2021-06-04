import { ADD_NEW_TASK,TOGGLE_ONE_TASK } from "../actions/actionTypes";
const taskReducers=(task=[],action)=>{
   
    switch (action.type) {
       
        case ADD_NEW_TASK:
            return[
            ...task,{
                    taskId:action.taskId,
                    taskName:action.taskName,
                    cityName: action.cityName,
                    cityTemp: action.cityTemp,
                    description: action.description,
                    data:action.data,
                    completed:false,
                  
            }

        ]
            break;
        case TOGGLE_ONE_TASK:
        return task.map(task =>
            (task.taskId=action.taskId)
            ? {...task,completed:!task.completed}
            :task
            
            )


        default:
            return task ;
    }

}
export default taskReducers; 