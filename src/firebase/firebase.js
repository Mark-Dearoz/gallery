// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
//import 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBbkS5Q1iiCwQlxKR9UEA-gGA_8HYVcJWk',
	authDomain: 'gallery-593a0.firebaseapp.com',
	projectId: 'gallery-593a0',
	storageBucket: 'gallery-593a0.appspot.com',
	messagingSenderId: '586305479189',
	appId: '1:586305479189:web:a737f0be34b21f49b9241c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const projectStorage = getStorage(app)
