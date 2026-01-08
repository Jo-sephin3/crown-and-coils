import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCG0EftB1mParjVUslZRUBz1fMQbPovs4o",
  authDomain: "crown-and-coils.firebaseapp.com",
  projectId: "crown-and-coils",
  storageBucket: "crown-and-coils.appspot.com",
  messagingSenderId: "144919557944",
  appId: "1:144919557944:web:2db24ea7d93b33b942f3cd",
  measurementId: "G-J2BLG7L581"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
