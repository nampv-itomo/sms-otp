import React, { useEffect, useState } from "react";
import "./App.css";
import app from "./firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(null);

  function onCaptchVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          defaultCountry: "VN",
          callback: (response) => {
            handleVerifyOTP();
          },
          "expired-callback": () => {},
        },
        app.auth()
      );
    }
  }

  const handleSendOTP = async () => {
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await app.auth().signInWithPhoneNumber(phoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      alert("OTP đã được gửi đến số điện thoại của bạn.");
    } catch (error) {
      console.error("Error sending OTP:", error);
    }
  };

  const handleVerifyOTP = async () => {
    if (!verificationId) return;
    const credential = await app.auth().PhoneappProvider.credential(verificationId, otp);
    try {
      await app.auth.signInWithCredential(credential);
      alert("Xác thực thành công!");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  useEffect(() => {
    onCaptchVerify();
  }, []);

  return (
    <div className="App">
      <div>
        <h2>Đăng nhập bằng OTP</h2>
        <input
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
        )}
      </div>
    </div>
  );
}

export default App;
