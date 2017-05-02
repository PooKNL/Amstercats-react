import { TOGGLE_LIKE } from '../actions/cats/toggle-like'
import { FETCHED_CATS } from '../actions/cats/fetch'
import { CAT_CREATED, CAT_UPDATED, CAT_REMOVED } from '../actions/cats/subscribe'

const dummyData = []

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCHED_CATS :
      return [].concat(payload)

    case CAT_CREATED :
      const newCat = [Object.assign({}, payload)]
      return [newCat].concat(state)

    case CAT_UPDATED :
      return state.map((cat) => {
        if (cat._id === payload._id) {
          return Object.assign({}, payload)
        }
        return cat
      })

    case CAT_REMOVED :
      return state.filter((cat) => (cat._id !== payload._id))

  default:
    return state
 }
}
