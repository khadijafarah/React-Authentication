import { useState } from "react";
import {Link} from "react-router-dom";
import "../styles/login.scss";
import axios from "axios";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password,setPassword]= useState("");
  
  const handleSubmit =(e) => {
    e.preventdefault();
  //   try {
  //     // const response = await axios.post("https://staging-be-ecom.techserve4u.com/api/user/signin",{email,password});
      
  //     // console.log(response?.data);

  //   } catch (error) {
  //     alert ("Error login!");
  //     console.log(error);
  //   }
  axios.post("https://staging-be-ecom.techserve4u.com/api/user/signin",{email,password})
  .then (res=> {
    console.log(res.data)
  })
  .catch(err => {
    console.log(err)
  })
  };
  return (
    <div className="login-form-container">
      <div className="login-form-box">
        <h2>Sign In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
        
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
          <button className="login-form-button">Sign In</button>
        </form>
        <Link to="/sign-Up">
          <p>Create a New Account</p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
