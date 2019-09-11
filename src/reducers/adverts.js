import { ADVERTS_FETCHED, ADVERT_ADDED } from '../actions/adverts'

export default (state = [], action = {}) => {
  switch (action.type) {
    case ADVERTS_FETCHED:
      return action.payload
    case ADVERT_ADDED:
      return [...state, action.payload]
    default:
      return state
  }
}