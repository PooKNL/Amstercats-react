export const CREATE_CAT = 'CREATE_CAT'

export default (newCat) => {
  return {
    type: CREATE_CAT,
    payload: newCat
  }
}
