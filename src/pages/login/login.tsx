import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import useMousePosition from "../../hooks/useMousePosition";

import "./Login.css";
// import useLocalStoragePassword from "../../hooks/useLocalStoragePassword";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useLoginMutation } from "../../api-services/auth/login.api";

const Login = () => {
  // if(localStorage.getItem("token")!==""){
  //   return;
  // }

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameError, setUserNameError] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useLocalStorage(
    "showPassword",
    "false"
  );
  const [login, { isLoading }] = useLoginMutation();
  const [type, setType] = useState(showPassword ? "text" : "password");
  const navigate = useNavigate();
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userName.length > 10) {
      setUserNameError(true);
    }
  }, [userName]);
  useEffect(() => {
    if (usernameRef.current) {
      console.log("Focus");
      usernameRef.current.focus();
    }
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    // const response=await login({email:userName,password:password})
    // if(response.data){
    //     localStorage.setItem("token",response.data.token)
    // navigate("/employee")
    login({ email: userName, password: password })
      .unwrap()
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.token);
        navigate("/employee");
      })
      .catch((error) => {
        setError(error?.data?.message);
      });
  };

  const clearUsername = () => {
    setUserName("");
  };
  const setUsername = (e) => {
    setUserName(e.target.value);
  };
  const handleToggle = () => {
    if (type === "password") {
      setType("text");
      setShowPassword("true");
    } else {
      setType("password");
      setShowPassword("false");
    }
  };
  return (
    <>
      <div className="main-login-container">
        <div className="left-container">
          <div className="blue-div">
            <div className="white-div">
              <img
                src="/assets/kv-login.jpeg"
                className="login-img"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="login-container">
            {error?.length > 0 && <p>Error: {error}</p>}
            <img src="/assets/kv-logo.png" className="logo-img" alt="logo" />
            {/* <p>
              {x}, {y}
            </p> */}
            <Input
              label="Email"
              ariaInput="Email"
              type="email"
              placeholder="Enter your email"
              value={userName}
              ref={usernameRef}
              onChange={(e) => setUsername(e)}
              endAdornment={
                <button
                  type="button"
                  onClick={clearUsername}
                  disabled={userName.length === 0}
                >
                  Clear
                </button>
              }
            />
            {userNameError && (
              <p> Username error: greater than 10 characters</p>
            )}
            <Input
              label="Password"
              ariaInput="Password"
              type={type}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="show-password">
              <input
                type="checkbox"
                defaultChecked={showPassword}
                onClick={handleToggle}
              />
              <p>Show Password</p>
            </div>
            {/* <button onClick={handleToggle}>Show password</button> */}
            <Button
              title="Login"
              disabled={isLoading}
              onClick={(e) => {
                handleLogin(e);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
