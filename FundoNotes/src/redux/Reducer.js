import { DATE_AND_TIME, TOGGLE_GRID_LABEL_VIEW } from "./Constants";
import { LABEL_DATA } from "./Constants";
const initialState = {
    toggle : false,
    labelData: [],
    dateTime:new Date()
}

export const reducer = (state= initialState, action )=>{
    switch(action.type){
        case TOGGLE_GRID_LABEL_VIEW:
            return{
                ...state,
                toggle: !state.toggle
            };
             

    case LABEL_DATA:
        return{
            ...state,
          labelData:  action.payload
        };
        case DATE_AND_TIME:
            return{
                ...state,
              dateTime: action.payload
            };
        default : return state
    }
 
}