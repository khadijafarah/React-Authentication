import { useState } from "react";
import "../styles/login.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  const [otp, setOtp] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name: fullName,
        password,
        email,
      };

      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/signup",
        data
      );
      if (response?.data?.isOtpSend) {
        // alert("Registered Succefully")
        setIsOtpSend(true);
      }
      console.log("response", response);
      
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleOTP = async (e) => {
    e.preventDefault();
    try {
      const data = {
        otp,
        email,
      };

      const response = await axios.post(
        "https://staging-be-ecom.techserve4u.com/api/user/verifyotp",
        data
      );
      console.log("otp", response);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div className="login-form-container">
      {isOtpSend ? (
        <div className="login-form-box">
          <h2>Verify OTP</h2>
          <form onSubmit={handleOTP} className="login-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
            </div>
            <button type="submit">Send & Verify</button>
          </form>
        </div>
      ) : (
        <div className="login-form-box">
          <h2> </h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />
            </div>
            <button className="login-form-button">Sign Up</button>
          </form>
          <Link to="/sign-in">
            <p>Already Have an Account?</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SignUp;
