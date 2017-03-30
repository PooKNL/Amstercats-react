import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'
export const FETCHED_CATS = 'FETCHED_CATS'

const api = new API()
const cats = api.service('cats')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    cats.find({
      query: {
        $limit: 25
      }
    })
    .then((response) => {
      dispatch(loadSuccess())
      dispatch({
        type: FETCHED_CATS,
        payload: response.data
      })
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
