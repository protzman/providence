import base from 're-base'
import firebase from 'firebase'

const firebaseconnector = firebase.initializeApp({
  apiKey: 'AIzaSyDa7WW18qjUX0AcWf7Fe5FBpVSsz6lEUqQ',
  authDomain: 'providence-cyb.firebaseapp.com',
  databaseUrl: 'https://providence-cyb.firebaseio.com/'
})

const database = base.createClass(firebaseconnector.database())

export { firebaseconnector }

export default database
