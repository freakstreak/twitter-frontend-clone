import React, { useEffect, useState } from "react";
import "./Login.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Snackbar from "@mui/material/Snackbar";

function Login(props) {
  const [mailCheck, setMailCheck] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginClicked, setLoginClicked] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  useEffect(() => {
    if (
      checks.capsLetterCheck &&
      checks.numberCheck &&
      checks.pwdLengthCheck &&
      checks.specialCharCheck &&
      mailCheck
    ) {
      setPasswordValid(true);
    }
  }, [checks, mailCheck]);

  let navigate = useNavigate();

  const handlePasswordChange = (e) => {
    validator(e.target.value);
    setLoginClicked(false);
  };

  const emailHandler = (e) => {
    emailValidator(e.target.value);
    setLoginClicked(false);
  };

  const removeToast = () => {
    setLoginClicked(false);
  };

  const emailValidator = (e) => {
    // eslint-disable-next-line
    const emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e);
    setMailCheck(emailCheck);
  };
  const validator = (p) => {
    const capsLetterCheck = /[A-Z]/.test(p);
    const numberCheck = /[0-9]/.test(p);
    const pwdLengthCheck = p.length >= 8;
    const specialCharCheck = /[!@#$%^&*]/.test(p);

    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault()
    setLoginClicked(true);
    setOpen(true);
    if (passwordValid) {
      props.setIsUserLoggedIn(true)
      navigate("/home");
      return;
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="form">
      <TwitterIcon className="fa" fontSize="large" />
      <form onSubmit={handleLogin} >
      <div>
      
        <input
          className="loginInput"
          type="text"
          placeholder="Email"
          onChange={emailHandler}
          onClick={removeToast}
        />
      </div>
      <div>
        <input
          className="loginInput allLoginInput"
          type="password"
          placeholder="Password"
          onClick={removeToast}
          onChange={handlePasswordChange}
        />
      </div>
      <div className="remember-me">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
        <a href="/"> . /Forgot password</a>
      </div>
      <input className="loginButton" type="submit" value="Log in" onClick={handleLogin} />
      </form>

      {!mailCheck ? (
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          className={!loginClicked ? "notVisible" : "visible"}
          message="Enter a valid email"
        />
      ) : !checks.pwdLengthCheck ? (
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          className={!loginClicked ? "notVisible" : "visible"}
          message="Enter atleast 8 characters in password"
        />
      ) : !checks.capsLetterCheck ? (
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          className={!loginClicked ? "notVisible" : "visible"}
          message="Enter atleast one capital letter in password"
        />
      ) : !checks.numberCheck ? (
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          className={!loginClicked ? "notVisible" : "visible"}
          message="Enter atleast one number in password"
        />
      ) : (
        !checks.specialCharCheck && (
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleClose}
            className={!loginClicked ? "notVisible" : "visible"}
            message="Enter atleast one special character in password"
          />
        )
      )}
    </div>
  );
}

export default Login;
