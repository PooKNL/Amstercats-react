import API from '../../middleware/api'
const api = new API()
const cats = api.service('cats')

export default (newCat, user) => {
  const cat = newCat
  const currentUser = user

  api.app.authenticate()
    .then(() => {
      cats.create(cat._name, cat._summary, cat._breed, cat._profilephoto)
    })
    .catch((error) => {
      console.error(error)
      // e.g. redirect to sign in!
    })

  return { type: 'CREATE_CAT'}
}

export const CREATE_CAT = 'CREATE_CAT'
