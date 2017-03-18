export const LIKE_CAT = 'LIKE_CAT'

export default (catLike) => {
  return {
    type: LIKE_CAT,
    payload: catLike
  }
}
