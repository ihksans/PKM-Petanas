<<<<<<< HEAD
import { SET_ALL_DISPOSISI, UNSET_ALL_DISPOSISI} from '../actions'
const INITIAL_STATE = {
    allDisposisiInfo: null,
}
=======
//reducer for user
//add a actions
import { SET_ALL_DISPOSISI, UNSET_ALL_DISPOSISI} from '../actions'
const INITIAL_STATE = {
    allDisposisiInfo: [],
}

>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
const applySetAllDisposisi = (state, action) => ({
    ...state,
    allDisposisiInfo: action.payload,
})

const applyUnsetAllDisposisi = (state) => ({
    ...state,
    allDisposisiInfo: [],
})
<<<<<<< HEAD
const setAllDisposisi = (state, action) => ({
    ...state,
    allDisposisiInfo: action.payload,
})
=======

>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
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
<<<<<<< HEAD
=======

>>>>>>> c3ee79e7c5401ef1249e6b7117e77c39c648f090
export default AllDisposisi
