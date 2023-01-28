// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-D8lnvrKQETNrAXBpnRaaErMpzDicw4o",
  authDomain: "authserver-ef58b.firebaseapp.com",
  projectId: "authserver-ef58b",
  storageBucket: "authserver-ef58b.appspot.com",
  messagingSenderId: "477371683626",
  appId: "1:477371683626:web:719e6e122a88389e5d0453",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// function getUserByUid(uid) {
//   auth
//     .getUser(uid)
//     .then(function (userRecord) {
//       console.log(userRecord.email);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

export default app;
// export { getUserByUid };
