import { combineReducers } from 'redux'
import todos from './todos'
import messages from './messages';

function lastAction(state = null, action) {
  return action;
}

const rootReducer = combineReducers({
  todos,
  messages,
  lastAction
})

export default rootReducer
