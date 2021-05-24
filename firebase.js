import firebase from 'firebase'

const firebaseConfig = {
    // you firebase configs
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export default db