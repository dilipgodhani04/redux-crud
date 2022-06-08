import { ADD_USER,DELETE_USER } from "./constat";

export const adduser = (data) => {
  return {
    type: ADD_USER,
    payload: data,
  };
};

export const deletUser = (data) => {
  return {
    type: DELETE_USER,
    payload:data,
  };
};

// const editUser =()=>{
//     return{
//         type:"editUser"
//     }
// }
