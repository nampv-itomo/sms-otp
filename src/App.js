import React, { useEffect, useState } from "react";
import "./App.css";
import app from "./firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import axios from "axios";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  // function onCaptchVerify() {
  //   if (!window.recaptchaVerifier) {
  //     window.recaptchaVerifier = new RecaptchaVerifier(
  //       "recaptcha-container",
  //       {
  //         size: "invisible",
  //         defaultCountry: "VN",
  //         callback: (response) => {
  //           handleVerifyOTP();
  //         },
  //         "expired-callback": () => {},
  //       },
  //       app.auth()
  //     );
  //   }
  // }

  // const handleSendOTP = async () => {
  //   const appVerifier = window.recaptchaVerifier;

  //   try {
  //     const confirmationResult = await app.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
  //     setVerificationId(confirmationResult.verificationId);
  //     alert("OTP đã được gửi đến số điện thoại của bạn.");
  //   } catch (error) {
  //     console.error("Error sending OTP:", error);
  //   }
  // };

  // const handleVerifyOTP = async () => {
  //   if (!verificationId) return;
  //   const credential = await app.auth().PhoneappProvider.credential(verificationId, otp);
  //   try {
  //     await app.auth.signInWithCredential(credential);
  //     alert("Xác thực thành công!");
  //   } catch (error) {
  //     console.error("Error verifying OTP:", error);
  //   }
  // };

  // useEffect(() => {
  //   onCaptchVerify();
  // }, []);

  const onLogin = async () => {
    // const data = await axios.post(
    //   "http://localhost:4003/api/v1/auth/login",
    //   {
    //     username: "admin",
    //     password: "123456",
    //   },
    //   {
    //     withCredentials: true,
    //   }
    // );

    fetch("https://api.hair.itomo.one/api/v1/auth/login", {
      method: "POST",
      credentials: "include", // Bắt buộc để gửi và nhận cookies
    });

    // console.log(data.data);
  };

  const onLoginHost = async () => {
    const data = await axios.post(
      "http://api.hair.itomo.one/api/v1/auth/login",
      // "https://api.woodpro.duclam.com/api/v1/auth/login",
      {
        username: "admin",
        password: "123456",
      },
      {
        withCredentials: true,
      }
    );

    console.log(data.data);
  };

  const onGetInfoClient = async () => {
    const data = await axios.get("http://localhost:4003/api/v1/auth/info", {
      withCredentials: true,
    });

    console.log(data.data);
  };

  const onGetInfoServer = async () => {
    const data = await axios.get("http://api.hair.itomo.one/api/v1/auth/info", {
      withCredentials: true,
    });

    // const data = await axios.get("https://api.woodpro.duclam.com/api/v1/users/me", {
    //   withCredentials: true,
    // });

    console.log(data.data);
  };

  return (
    <div className="App">
      <div>
        <h2>Đăng nhập bằng OTP</h2>
        {/* <input
          type="text"
          placeholder="Số điện thoại (+84...)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button onClick={handleSendOTP}>Gửi OTP</button>

        <div id="recaptcha-container"></div>

        {verificationId && (
          <>
            <input type="text" placeholder="Nhập mã OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <button onClick={handleVerifyOTP}>Xác thực OTP</button>
          </>
        )} */}

        <button onClick={onLogin}>Login</button>
        <br />
        <button onClick={onLoginHost}>Login Host</button>
        <br />
        <button onClick={onGetInfoClient}>Info Client</button>
        <br />
        <button onClick={onGetInfoServer}>Info Server</button>
      </div>
    </div>
  );
}

export default App;
