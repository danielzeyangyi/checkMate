import { get } from '../../utils/request';
// the schema for any incoming actions
export const FETCH_DATA = 'FETCH_DATA';

export default store => next => action => {
  const callAPI = action[FETCH_DATA];
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  const { endPoint, schema, types } = callAPI;
  if (typeof endPoint !== 'string')
    throw new Error('end point must by string format');
  if (schema) throw new Error('Schema must be pointing to a domain');
  if (!Array.isArray(types) && types.length !== 3)
    throw new Error('Must assign a list of at least 3 actions');
  if (!types.every(type => typeof type === 'string'))
    throw new Error('action type must be string');

  const actionWith = data => {
    const finalAction = { ...action, ...data };
    delete finalAction[FETCH_DATA];
    return finalAction;
  };
  const [requestType, successType, failureType] = types;

  next(actionWith({ type: requestType }));
  return fetchData(endPoint, schema).then(
    response =>
      next(
        actionWith({
          type: successType,
          response
        })
      ),
    error =>
      next(
        actionWith({
          type: failureType,
          error: error.message || 'fail to load the data'
        })
      )
  );
};

const fetchData = (endPoint, schema) => {
  return get(endPoint).then(data => {
    // notmalize data into key value pair structure
    return normalizeData(data, schema);
  });
};

const normalizeData = (data, schema) => {
  const { id, name } = schema;
  let kvObj = {};
  const ids = []; // store the order of objs
  if (Array.isArray(data)) {
    data.forEach(item => {
      kvObj[item[id]] = item;
      ids.push(item[id]);
    });
  } else {
    kvObj[data[id]] = data;
    ids.push(data.id);
  }

  return {
    [name]: kvObj,
    ids
  };
};
