//reducer for user
//add a actions
import { SET_ALL_DISPOSISI, UNSET_ALL_DISPOSISI } from '../actions'
const INITIAL_STATE = {
  allDisposisiInfo: [],
}

const applySetAllDisposisi = (state, action) => ({
  ...state,
  allDisposisiInfo: action.payload,
})

const applyUnsetAllDisposisi = (state) => ({
  ...state,
  allDisposisiInfo: [],
})
function AllDisposisi(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_ALL_DISPOSISI:
      return applySetAllDisposisi(state, action)
    case UNSET_ALL_DISPOSISI:
      return applyUnsetAllDisposisi(state)
    default:
      return state
  }
}
export default AllDisposisi
