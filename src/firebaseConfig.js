import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCakg3Kx4A2eCZm2o6l0fg3WUeeFkOm3MI",
  authDomain: "test-otp-13a6d.firebaseapp.com",
  projectId: "test-otp-13a6d",
  storageBucket: "test-otp-13a6d.appspot.com",
  messagingSenderId: "654232418257",
  appId: "1:654232418257:web:dc841724e694508ac352f0",
  measurementId: "G-Z3EB3ZM2QS",
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCtyYyCvIslB0wVVdHyj_boLCByiA5pA8U",
//   authDomain: "sms-otp-82d19.firebaseapp.com",
//   projectId: "sms-otp-82d19",
//   storageBucket: "sms-otp-82d19.appspot.com",
//   messagingSenderId: "953546483110",
//   appId: "1:953546483110:web:0baa5c42edc5f647701b67",
//   measurementId: "G-NY9NMZEF42",
// };

firebase.initializeApp(firebaseConfig);

export default firebase;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCtyYyCvIslB0wVVdHyj_boLCByiA5pA8U",
//   authDomain: "sms-otp-82d19.firebaseapp.com",
//   projectId: "sms-otp-82d19",
//   storageBucket: "sms-otp-82d19.appspot.com",
//   messagingSenderId: "953546483110",
//   appId: "1:953546483110:web:0baa5c42edc5f647701b67",
//   measurementId: "G-NY9NMZEF42",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export default app;
