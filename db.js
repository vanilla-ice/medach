var firebase = require('firebase')

var firebaseConfig = {
  apiKey: 'AIzaSyBnStXtEA0VTDIaBt7sJx5sscPsUa3Mek4',
  authDomain: 'medach-7fe0e.firebaseapp.com',
  databaseURL: 'https://medach-7fe0e.firebaseio.com',
  projectId: 'medach-7fe0e',
  storageBucket: 'medach-7fe0e.appspot.com',
  messagingSenderId: '385198630450'
}

var firebaseApp = firebase.apps.length === 0
  ? firebase.initializeApp(firebaseConfig) : firebase.apps[0]

var db = firebaseApp.database()

module.exports = {
  db: db,
  firebase: firebase
}
