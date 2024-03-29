import { combineReducers } from 'redux';
import url from '../../utils/url';
import { FETCH_DATA } from '../middleware/api';
import { schema } from './entities/products';

// common params for request
export const params = {
  PATH_LIKES: 'likes',
  PATH_DISCOUNTS: 'discounts',
  PAGE_SIZE_LIKES: 5,
  PAGE_SIZE_DISCOUNTS: 3
};

export const types = {
  // recommendation
  FETCH_LIKES_REQUEST: 'HOME/FETCH_LIKES_REQUEST',
  FETCH_LIKES_SUCCESS: 'HOME/FETCH_LIKES_SUCCESS',
  FETCH_LIKES_FAILURE: 'HOME/FETCH_LIKES_FAILURE',

  //Discounts
  FETCH_DISCOUNTS_REQUEST: 'HOME/FETCH_DISCOUNTS_REQUEST',
  FETCH_DISCOUNTS_SUCCESS: 'HOME/FETCH_DISCOUNTS_SUCCESS',
  FETCH_DISCOUNTS_FAILURE: 'HOME/FETCH_DISCOUNTS_FAILURE'
};

const initialState = {
  likes: {
    isFetching: false,
    pageCount: 0,
    ids: []
  },
  discounts: {
    isFetching: false,
    ids: []
  }
};

export const actions = {
  //load recommendations
  loadLikes: () => {
    return (dispatch, getState) => {
      const { pageCount } = getState().home.likes;
      const rowIndex = pageCount * params.PAGE_SIZE_LIKES;
      const endpoint = url.getProductList(
        params.PATH_LIKES,
        rowIndex,
        params.PAGE_SIZE_LIKES
      );
      return dispatch(fetchLikes(endpoint));
    };
  },

  //load discounts
  loadDiscounts: () => {
    return (dispatch, getState) => {
      const { ids } = getState().home.discounts;
      // we can use the list of discounts already loaded in store, we then skip the http request
      if (ids.length > 0) {
        return null;
      }
      const endpoint = url.getProductList(
        params.PATH_DISCOUNTS,
        0,
        params.PAGE_SIZE_DISCOUNTS
      );
      return dispatch(fetchDiscounts(endpoint));
    };
  }
};

const fetchLikes = endpoint => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_LIKES_REQUEST,
      types.FETCH_LIKES_SUCCESS,
      types.FETCH_LIKES_FAILURE
    ],
    endpoint,
    schema
  }
});

const fetchDiscounts = endpoint => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_DISCOUNTS_REQUEST,
      types.FETCH_DISCOUNTS_SUCCESS,
      types.FETCH_DISCOUNTS_FAILURE
    ],
    endpoint,
    schema
  }
});

//recommendation reducer
const likes = (state = initialState.likes, action) => {
  switch (action.type) {
    case types.FETCH_LIKES_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_LIKES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pageCount: state.pageCount + 1,
        ids: state.ids.concat(action.response.ids)
      };
    case types.FETCH_LIKES_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

//Discounts reducer
const discounts = (state = initialState.discounts, action) => {
  switch (action.type) {
    case types.FETCH_DISCOUNTS_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_DISCOUNTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        ids: state.ids.concat(action.response.ids)
      };
    case types.FETCH_DISCOUNTS_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

const reducer = combineReducers({
  discounts,
  likes
});

export default reducer;

//selectors
//recommendation state
export const getLikes = state => {
  return state.home.likes.ids.map(id => {
    return state.entities.products[id];
  });
};

//discounts state
export const getDiscounts = state => {
  return state.home.discounts.ids.map(id => {
    return state.entities.products[id];
  });
};

// page id
export const getPageCountOfLikes = state => {
  return state.home.likes.pageCount;
};
