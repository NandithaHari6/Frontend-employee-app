// import "./Login.css";
import LoginInput from "./LoginInput-Uncontrolled.tsx";
import { useRef, useEffect, type FormEvent } from "react";
import kvLogo from "/assets/kv-logo.png";
import kvLoginImg from "/assets/kv-login.jpeg";
import Button from "../../components/Button-Uncontrolled/Button";
import "./UncontrolledLogin.css";
const UncontrolledLogin = () => {
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const clearBtnRef = useRef<HTMLButtonElement | null>(null);
  const submitBtnRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (usernameRef?.current) usernameRef.current.focus();
  }, []);
  function clearUsername() {
    if (!usernameRef.current) return;
    usernameRef.current.value = "";
    if (!clearBtnRef.current) return;
    clearBtnRef.current.disabled = true;
  }
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!usernameRef.current) return;
    console.log(e.target);
  }
  function updateClearButton() {
    if (!clearBtnRef.current || !usernameRef.current) return;
    if (usernameRef.current.value.length > 0) {
      clearBtnRef.current.disabled = false;
      clearBtnRef.current.onclick = clearUsername;
    }
  }

  return (
    <div className="content">
      <div className="pattern-side">
        <div className="pattern" />
        <div className="circle-large">
          <div className="circle-inner">
            <img src={kvLoginImg} alt="KV Login" className="login-image" />
          </div>
        </div>
      </div>
      <div className="login-side">
        <div className="login-content">
          <img className="logo" src={kvLogo} alt="KV Logo" />
          <form onSubmit={(e) => handleSubmit(e)}>
            <LoginInput
              id="login-username-input"
              label="Username"
              ref={usernameRef}
              name="username"
              onChange={() => {
                updateClearButton();
                // loginBtnDisable();
              }}
              endAdornment={
                <button ref={clearBtnRef} disabled={true} type="button">
                  Clear
                </button>
              }
            />

            <LoginInput
              id="login-password-input"
              label="Password"
              name="password"
            />

            <Button
              type="submit"
              // disabled={true}
              ref={submitBtnRef}
              className="login-button"
            >
              Log in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UncontrolledLogin;
