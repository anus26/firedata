import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3h4WiUXPc0xB2ieoyj294rsoaBHGckT8",
  authDomain: "fir-authentication-729c4.firebaseapp.com",
  projectId: "fir-authentication-729c4",
  storageBucket: "fir-authentication-729c4.appspot.com",
  messagingSenderId: "112750709129",
  appId: "1:112750709129:web:22b97e3ff23863246c7958",
  measurementId: "G-4TRMRWLVDS"
};

 const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





 