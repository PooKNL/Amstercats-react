import API from '../../middleware/api'
const api = new API()
const cats = api.service('cats')

export default (cat, user) => {
  const liked = cat.likedBy.filter((like) => (like === user._id)).length > 0

  api.app.authenticate()
    .then(() => {
      cats.patch(cat._id, { like: !liked })
    })
    .catch((error) => {
      console.error(error)
      // e.g. redirect to sign in!
    })

  return { type: 'LIKED_CAT' }
}
