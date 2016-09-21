import {
  SHOW_ACTIONSHEET,
  HIDE_ACTIONSHEET,
  // FETCH_SFLDATA,
  // FETCH_REQUEST,
  BEARING_WARNING
} from '../constants/ActionTypes'

const initialState = {
  text: 'dialog show',
  isShow: false,
  id: 0,
  isWarning: false,
  warningCode: 0
}


export default function todos(state = initialState, action) {
  switch (action.type) {
    // case ADD_TODO:
    //   return [
    //     {
    //       id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
    //       completed: false,
    //       text: action.text
    //     },
    //     ...state
    //   ]

    // case DELETE_TODO:
    //   return state.filter(todo =>
    //     todo.id !== action.id
    //   )

    case SHOW_ACTIONSHEET:
      return Object.assign({}, state, {
        isShow: true
      })

    case HIDE_ACTIONSHEET:
      return Object.assign({}, state, {
        isShow: false
      })

    case BEARING_WARNING:
      return Object.assign({}, state, {
        isWarning: true,
        warningCode: action.warningCode
      })

    // case FETCH_SFLDATA:
    //   return Object.assign({}, state, {
    //     sflData: action.data
    //   })
    // case FETCH_REQUEST:
    //   return Object.assign({}, state, {
    //     sflData: action.data
    //   })
    default:
      return state
  }
}
