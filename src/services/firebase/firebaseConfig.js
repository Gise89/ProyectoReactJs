import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

const firebaseConfing = {
    apikey: "AIzaSyDM3Vtwlk1TtblWH3QEMBpKQ82VHxK6djo",
    authComain: "backend34860.firebaseapp.com",
    projectId: "backend34860",
    StorageBucket:"backend34860.appsport.com",
    messagingSenderId: "94047319929",
    appId: "1:94047319929:web:2c9468e912534b938d21a8"
}

const app = initializeApp(firebaseConfing)
export const db = getFirestore(app)