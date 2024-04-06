import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB3wIOienNgrZOruT4cR833vrNNIHodrEc",
  authDomain: "qrcode-db-766cf.firebaseapp.com",
  projectId: "qrcode-db-766cf",
  storageBucket: "qrcode-db-766cf.appspot.com",
  messagingSenderId: "65710878702",
  appId: "1:65710878702:web:e9170adf28195051df68ff",
  measurementId: "G-E7KTE1SLGB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { analytics, firestore, storage };
