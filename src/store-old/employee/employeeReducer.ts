import { EMPLOYEE_ACTION_TYPES, type EmployeeAction, type EmployeeState,type Employee } from "./employee.types"

const initialState:EmployeeState={ employees:[]}

function employeeReducer(state:EmployeeState=initialState, action:EmployeeAction):EmployeeState{
    switch(action.type){
        case EMPLOYEE_ACTION_TYPES.DELETE:
            // let new_state= {...state};
            // const result=new_state.employees.filter((emp)=>emp.employeeId!==action.payload)
            //   // return {...state,employees:[result]}
            return {...state,employees:[...state.employees.filter((emp)=>emp.employeeId!==action.payload)]}
          
                
        case EMPLOYEE_ACTION_TYPES.ADD:
            // let employees_arr={...state};
            // console.log(employees_arr.employees)
            // employees_arr.employees.push(action.payload)
            // return employees_arr
            return {
                ...state,
                employees:[...state.employees, action.payload]
            }
        case EMPLOYEE_ACTION_TYPES.UPDATE:
            return {...state,
                employees:[...state.employees, action.payload]
            }
        
        default: 
            return state;
    }

}
export default employeeReducer