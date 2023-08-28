import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBMvaJfXbyUv24ugDrk4hjB0FEQizg7w0c",
  authDomain: "tickets-a4597.firebaseapp.com",
  projectId: "tickets-a4597",
  storageBucket: "tickets-a4597.appspot.com",
  messagingSenderId: "537184556215",
  appId: "1:537184556215:web:35e6a95d60b4cfa96c2932",
  measurementId: "G-TPZT1PJJJK"
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
const storage = getStorage(firebaseApp)

export {
  auth,
  db,
  storage,
}