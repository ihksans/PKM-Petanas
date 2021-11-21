//reducer for user
//add a actions
import { SET_LOG, UNSET_LOG } from '../actions'
const INITIAL_STATE = {
  log: [],
}

const applySetLog = (state, action) => ({
  ...state,
  log: action.payload,
})

const applyUnsetLog = (state) => ({
  ...state,
  log: [],
})
//manggil nya disini nama method + nama variabel
function RLog(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOG:
      return applySetLog(state, action)
    case UNSET_LOG:
      return applyUnsetLog(state)
    default:
      return state
  }
}

export default RLog
