import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
} from '@env';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

try {
  const app = initializeApp(firebaseConfig);
  console.log('Firebase initialized:', app.name);
} catch (error) {
  console.error('Firebase initialization error:', error.message);
}

export const auth = getAuth();
export const db = getFirestore();

// import {initializeApp} from 'firebase/app';
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';

// // Hardcoded Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyD_7t1nOzmWIUlPjUdqNgOuzinvZ3rACLA',
//   authDomain: 'test-bbr.firebaseapp.com',
//   databaseURL: 'https://test-bbr-default-rtdb.firebaseio.com',
//   projectId: 'test-bbr',
//   storageBucket: 'test-bbr.firebasestorage.app',
//   messagingSenderId: '60086500861',
//   appId: '1:60086500861:web:e20ce645e1a499c8baed94',
//   measurementId: 'G-JDTBN1HKWG',
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app); // Export Firebase Authentication
// export const db = getFirestore(app); // Export Firestore
// export default app;
