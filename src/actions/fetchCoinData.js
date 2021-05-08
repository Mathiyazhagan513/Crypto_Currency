import axios from 'axios'
import { apiBaseURL } from '../utils/constants'
import { FETCH_COIN_DATA, FETCH_COIN_DATA_SUCCESS, FETCH_COIN_DATA_FAIL } from '../utils/actionTypes';

export default function fetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCH_COIN_DATA })

    return axios.get(`${apiBaseURL}v1/ticker/?limit=10`)
      .then(res => {
        dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: res.data })
      })
      .catch(error => {
        dispatch({ type: FETCH_COIN_DATA_FAIL, payload: error.data })
      })
  }
}
