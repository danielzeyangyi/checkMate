import { get } from '../../utils/request';
import url from '../../utils/url';

//action types
export const types = {
  FETCH_LIKES_REQUEST: 'HOME/FETCH_LIKES_REQUEST', // fetch recommendation list
  FETCH_LIKES_SUCCESS: 'HOME/FETCH_LIKES_SUCCESS', // fetch recommendation list succeed
  FETCH_LIKES_FAILURE: 'HOME/FETCH_LIKES_FAILURE' // fetch recommendation list failed
};

// action creators
export const actions = {
  loadLikes: () => (dispatch, getState) => {
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
