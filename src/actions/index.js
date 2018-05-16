const REQUEST = 'REQUEST'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export const USER = createRequestTypes('USER')
export const METRICS = createRequestTypes('METRICS')

export const LOAD_USER_PAGE = 'LOAD_USER_PAGE'
export const LOAD_METRICS_PAGE = 'LOAD_METRICS_PAGE'
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

function action(type, payload = {}) {
  return { type, ...payload }
}

export const user = {
  request: login => action(USER[REQUEST], { login }),
  success: (login, response) => action(USER[SUCCESS], { login, payload: response }),
  failure: (login, error) => action(USER[FAILURE], { login, error }),
}

export const metrics = {
  request: filler => action(METRICS[REQUEST], { filler }),
  success: (metricsdata, resposne) => action(METRICS[SUCCESS], { metrics, resposne }),
  failure: (metricsdata, error) => action(METRICS[FAILURE], { metrics, error })
}

export const loadUserPage = (login, requiredFields = []) => action(LOAD_USER_PAGE, { login, requiredFields })
export const loadMetricsPage = id => action(LOAD_METRICS_PAGE, { id })

export const resetErrorMessage = () => action(RESET_ERROR_MESSAGE)
