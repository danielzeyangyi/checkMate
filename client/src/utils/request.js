const headers = new Headers({
  Accept: 'application/json',
  'Content-Type': 'application/json'
});

function get() {
  return fetch(url, {
    method: 'GET',
    headers: headers
  })
    .then(response => {
      handleResponse(url, response);
    })
    .catch(err => {
      console.log(`error failed. Url:${url}`);
      return Promise.reject({
        error: { message: `request failed due to${error.message}` }
      });
    });
}

function post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: headers,
    body: data
  })
    .then(response => {
      handleResponse(url, response);
    })
    .catch(err => {
      console.log(`error failed. Url:${url}`);
      return Promise.reject({
        error: { message: `request failed due to${error.message}` }
      });
    });
}

function handleResponse(url, response) {
  if (response.status === 200) {
    return response.json();
  } else {
    console.log(`error failed. Url:${url}`);
    return Promise.reject({
      error: { message: `request failed due to server error` }
    });
  }
}

export { get, post };