import request from 'superagent'

// TODO: replace with online url
const baseUrl = 'http://localhost:4000'


export const ADVERTS_FETCHED = 'ADVERTS_FETCHED'

const advertsFetched = (adverts) => ({
  type: ADVERTS_FETCHED,
  payload: adverts
})

export const fetchAdverts = () => (dispatch, getState) => {
  if (getState().adverts !== []) return
  request(`${baseUrl}/adverts`)
    .then(response => {
      dispatch(advertsFetched(response.body.adverts))
    })
    .catch(err => console.error(err))
}


export const ADVERT_ADDED = "ADVERT_ADDED"

const advertAdded = (advert) => ({
  type: ADVERT_ADDED,
  payloa: advert
})

export const createAdvert = (advertData) => (dispatch) => {
  console.log(advertData)
  request
    .post(`${baseUrl}/adverts`)
    .send(advertData)
    .then(response => {
      dispatch(advertAdded(response.body))
    })
    .catch(err => console.error(err))
}

