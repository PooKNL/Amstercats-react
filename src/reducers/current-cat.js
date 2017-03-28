import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'

const CURRENT_CAT_KEY = 'cats.currentCat'

const initialState = JSON.parse(localStorage.getItem(CURRENT_CAT_KEY))

export default (state = initialState, { type, payload }) => {
  switch(type) {
    case USER_SIGNED_IN :
      const currentCat = Object.assign({}, payload)
      localStorage.setItem(CURRENT_CAT_KEY, JSON.stringify(currentCat))
      return currentCat

    default :
      return state
  }
}
