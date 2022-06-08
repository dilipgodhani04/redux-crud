import { ADD_USER } from "../Action.js/constat";
import {DELETE_USER} from "../Action.js/constat"

const intialState = {
  userList: [],
 
};
const newData = (state = intialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        userList: [...state.userList, action.payload],
      }

 case DELETE_USER:
    // console.log(action.payload,"idddddddddddd");
     return{
         ...state,
         userList:[state.userList.filter((item) => item.id !== action.payload)]
     }

    default:
      return state;
  }
};
export default newData;
