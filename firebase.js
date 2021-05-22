import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAbhucudE4NX2f0DOFdl3FABGKBa2urhjU",
    authDomain: "amaz-clone-ks.firebaseapp.com",
    projectId: "amaz-clone-ks",
    storageBucket: "amaz-clone-ks.appspot.com",
    messagingSenderId: "379541826028",
    appId: "1:379541826028:web:4848bdf4e86000949a38c9"
}

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export default db