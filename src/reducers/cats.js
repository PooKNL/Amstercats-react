import { CREATE_CAT } from '../actions/cats/create'
import { FETCHED_CATS } from '../actions/cats/fetch'
import { CAT_CREATED, CAT_UPDATED, CAT_REMOVED } from '../actions/cats/subscribe'

const dummyData = [
  // {
  //   _id: 'abcd123',
  //   name: 'DummyWally',
  //   summary: 'Our lovely little furball.',
  //   age: '6 months',
  //   breed: 'Ragdoll',
  //   liked: false,
  // },
  // {
  //     _id: 'abcd124',
  //   name: 'DummyArt',
  //   summary: 'Q and Yores lovely little furball.',
  //   age: '5 years',
  //   breed: 'European shorthair',
  //   liked: false,
  // },
  // {
  //   _id: 'abcd125',
  //   name: 'DummyBaas',
  //   summary: 'Flip and Vrooms first lovely little furball.',
  //   age: '2 years',
  //   breed: 'Something',
  //   liked: false,
  // },
  // {
  //   _id: 'abcd126',
  //   name: 'DummyBarney',
  //   summary: 'Flip and Vrooms second lovely little furball.',
  //   age: '1 year',
  //   breed: 'Something',
  //   liked: false,
  // },
]

export default (state = dummyData, { type, payload } = {}) => {
  switch(type) {
    case FETCHED_CATS :
      return [].concat(payload)

    case CREATE_CAT :
      return [Object.assign({}, payload)].concat(state)

    case CAT_CREATED :
      const NewCat = [Object.assign({}, payload)]
      return [NewCat].concat(state)

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
