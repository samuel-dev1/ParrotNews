import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getApps } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyBrsR5hHYoOtllwis6cpvbQDp7tLhRmqLY",
  authDomain: "parrot1-4e1eb.firebaseapp.com",
  projectId: "parrot1-4e1eb",
  storageBucket: "parrot1-4e1eb.appspot.com",
  messagingSenderId: "69294327689",
  appId: "1:69294327689:web:1da5bca37f82410f690358",
};
if (!getApps().length ===undefined) {
  initializeApp(firebaseConfig);
}
else{
  initializeApp(firebaseConfig);
}

const auth = getAuth();

export{auth}