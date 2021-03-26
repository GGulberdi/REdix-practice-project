import axios from "axios";
export const UPDATE_USER = "UPDATE_USER"; //Step-1 Define Action Type
export const GET_USER_ERROR = "GET_USER_ERROR"; //Step-1 Define Action Type

//Step-2 Define Action Creator
//Step-3 Define Action(return)
export function updateUser(newUser) {
  return {
    type: UPDATE_USER,
    payload: { user: newUser },
  };
}

export function getUsers() {
  return  dispatch=>{
    axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(response=>response.data)
    .then(response=>dispatch(updateUser(response.name)))
    .catch(error=>dispatch(showError()))
  }
  }

// export function getUsers() {
//   return async dispatch=>{
//     try{const result = awaitaxios.get('https://jsonplaceholder.typicode.com/users/1')
//       dispatch(updateUser(response.name))   
//  .then(response=>dispatch(updateUser(response.name)))
//     ch(error=>dispatch(showError()))
//   }
  
// }

export function showError() {
  return {
    type: GET_USER_ERROR,
    payload: { error: "Error Text..." },
  };
}
