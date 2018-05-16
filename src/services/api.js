import axios from 'axios'

const API_ROOT = 'https://api.github.com/'

function apiFetch(endpoint) {
  const fullUrl = endpoint ? API_ROOT + endpoint : API_ROOT
  console.log('api fetch')
  return axios({
    method: 'get',
    url: fullUrl
  })
    .then((response) => {
      console.log('success in api fetch')
      return response
    })
    .catch(error => ({ error: error.message || 'Something bad happened' }))
    .then(response => ({ response }))
}

export const fetchUser = login => apiFetch(`users/${login}`)
// export const fetchMetrics = apiFetch(null)
