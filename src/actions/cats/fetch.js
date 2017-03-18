import API from '../../middleware/api'

export const FETCHED_CATS = 'FETCHED_CATS'

const api = new API()
const cats = api.service('cats')

export default () => {
  return (dispatch) => {
    console.log('Fetching cats...')
    cats.find()
      .then((result) => {
        console.log('Results are in!', result)
        dispatch(fetchedCats(result))
      })
  }
}

const fetchedCats = (result) => {
  console.log('dispatching fetchedCats')
  return {
    type: FETCHED_CATS,
    payload: [].concat(result.data)
  }
}
