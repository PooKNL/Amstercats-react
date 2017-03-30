import API from '../../middleware/api'

export const SUBSCRIBED_TO_CATS_SERVICE = 'SUBSCRIBED_TO_CATS_SERVICE'
export const CAT_CREATED = 'CAT_CREATED'
export const CAT_UPDATED = 'CAT_UPDATED'
export const CAT_REMOVED = 'CAT_REMOVED'

const api = new API()
const cats = api.service('cats')

export default () => {
  return (dispatch) => {
    cats.on('created', (cat) => { dispatch(createdCat(cat)) })
    cats.on('updated', (cat) => { dispatch(updatedCat(cat)) })
    cats.on('patched', (cat) => { dispatch(updatedCat(cat)) })
    cats.on('removed', (cat) => { dispatch(removedCat(cat)) })

    dispatch({ type: SUBSCRIBED_TO_CATS_SERVICE })
  }
}

const createdCat = (cat) => {
  return {
    type: CAT_CREATED,
    payload: cat
  }
}

const updatedCat = (cat) => {
  return {
    type: CAT_UPDATED,
    payload: cat
  }
}

const removedCat = (cat) => {
  return {
    type: CAT_REMOVED,
    payload: cat
  }
}
