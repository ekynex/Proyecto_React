import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBx6VSIPsm5qi9GcwkkCbR0uAn4hWKHOcU",
  authDomain: "coderhouse-reactjs-f9424.firebaseapp.com",
  projectId: "coderhouse-reactjs-f9424",
  storageBucket: "coderhouse-reactjs-f9424.appspot.com",
  messagingSenderId: "841965986163",
  appId: "1:841965986163:web:d6ed1ecb39a430eccaa506"
};

// Inicializamos el servicio de Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos la base de datos
export const db = getFirestore(app);