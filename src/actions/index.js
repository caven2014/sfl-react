import * as types from '../constants/ActionTypes'

// export function addTodo(text) {
//   return { type: types.ADD_TODO, text }
// }


export function showActionSheet() {
  return { type: types.SHOW_ACTIONSHEET }
}


export function hideActionSheet() {
  return { type: types.HIDE_ACTIONSHEET }
}

// function fetchRequest(data) {
//   return {
//     type: types.FETCH_REQUEST,
//     data
//   }
// }



export function fetchSflData() {
  return {type: types.FETCH_SFLDATA}
}


/****/

export function connect() {
  return {
    type: types.CONNECT
  }
}

export function disconnect() {
  return {
    type: types.DISCONNECT
  }
}

export function receiveMessage(message){
  return {
    type: types.RECEIVE_MESSAGE,
    message
  }
}

export function postMessage(text){
  return {
    type: types.POST_MESSAGE,
    text
  }
}

export function bearingWarning(warningCode) {
  return {
    type: types.BEARING_WARNING,
    warningCode
  }
}
