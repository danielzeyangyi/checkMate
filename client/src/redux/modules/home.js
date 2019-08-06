import { get } from '../../utils/request';
import url from '../../utils/url';
import { FETCH_DATA } from '../middleware/api';
import { schema } from './entities/products';

//action types
export const types = {
  FETCH_LIKES_REQUEST: 'HOME/FETCH_LIKES_REQUEST', // fetch recommendation list
  FETCH_LIKES_SUCCESS: 'HOME/FETCH_LIKES_SUCCESS', // fetch recommendation list succeed
  FETCH_LIKES_FAILURE: 'HOME/FETCH_LIKES_FAILURE' // fetch recommendation list failed
};

// action creators
export const actions = {
  loadLikes: () => (dispatch, getState) => {
    const endpoint = url.getProductList(0, 10);
    return dispatch(fetchLikes(endpoint));
  },

  legacyLoadLikes: () => (dispatch, getState) => {
    dispatch(fetchLikesRequest());

    return get(url.getProductList(0, 10)).then(
      data => {
        dispatch(fetchLikesSuccess(data));
      },
      err => {
        dispatch(fetchLikesFailure(err));
      }
    );
  }
};

const fetchLikes = (endpoint, params) => ({
  [FETCH_DATA]: {
    types: [
      type.FETCH_LIKES_REQUEST,
      type.FETCH_LIKES_SUCCESS,
      type.FETCH_LIKES_FAILURE
    ],
    endpoint,
    schema
  }
});

const fetchLikesRequest = () => ({
  type: types.FETCH_LIKES_REQUEST
});

const fetchLikesSuccess = data => ({
  type: types.FETCH_LIKES_SUCCESS,
  data
});

const fetchLikesFailure = error => ({
  type: types.FETCH_LIKES_FAILURE,
  error
});

const reducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_LIKES_REQUEST:
    // todo
    case types.FETCH_LIKES_SUCCESS:
    //todo
    case types.FETCH_LIKES_FAILURE:
    //todo
    default:
      return state;
  }
  return state;
};

export default reducer;
