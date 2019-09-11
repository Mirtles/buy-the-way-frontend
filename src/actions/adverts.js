import request from 'superagent'

export const ADVERTS_FETCHED = 'ADVERTS_FETCHED'

// TODO: replace with online url
const baseUrl = 'http://localhost:4000'

const advertsFetched = (adverts) => ({
  type: ADVERTS_FETCHED,
  payload: adverts
})

export const fetchAdverts = () => (dispatch, getState) => {
  // checks if already in redux store
  if (getState().adverts) return
  request(`${baseUrl}/adverts`)
    .then(response => {
      dispatch(advertsFetched(response.body.adverts))
    })
    .catch(err => console.error(err))
}

