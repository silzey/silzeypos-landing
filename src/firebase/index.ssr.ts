
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';

// This file is for server-side rendering (SSR) only.
// It uses a service account for authentication if available.

let firebaseApp: FirebaseApp;

if (!getApps().length) {
    if (process.env.SERVICE_ACCOUNT_JSON) {
        const { initializeApp: initializeAdminApp, cert } = require('firebase-admin/app');
        const serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_JSON);
        
        initializeAdminApp({
            credential: cert(serviceAccount),
            // Note: No databaseURL needed for Firestore with @google-cloud/firestore
        });

        // We still initialize the client app for config consistency
        firebaseApp = initializeApp(firebaseConfig);

    } else {
        // Fallback for environments without a service account (e.g., local dev without auth)
        firebaseApp = initializeApp(firebaseConfig);
    }
} else {
    firebaseApp = getApp();
}

// We get Firestore from the @google-cloud/firestore package when on the server with a service account
// otherwise, we use the client SDK's getFirestore.
const firestore = process.env.SERVICE_ACCOUNT_JSON
  ? require('firebase-admin/firestore').getFirestore()
  : getFirestore(firebaseApp);


export function initializeFirebase() {
    return { firebaseApp, firestore };
}
