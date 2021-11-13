import React, { useContext, useEffect, useState } from "react";
import { LoginContainer, LoginModal } from "./LoginElements";
import "../../styles/spin.module.css";
import { login } from "../../pages/api/index";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import { ListContext } from "../ListContext/ListContext";

const Login = (props) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const { setIsLoggedIn, setNeedData, auth } = useContext(ListContext);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const router = useRouter();

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value.toLowerCase() }));
    };
  };

  useEffect(() => {
    try {
      if (localStorage.getItem("token")) {
        if (jwt.verify(localStorage.getItem("token"), "test")) {
          setNeedData(true);
          setIsLoggedIn(true);
          auth.login(() => {
            router.push("/home");
          });
        }
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (isLoggingIn) return;
    if (values.username === "" || values.password === "") {
      alert("Please Enter All Fields");
      return;
    }
    setIsLoggingIn(true);
    login(values)
      .then((res) => {
        console.log(jwt.decode(res.data.token));
        localStorage.setItem("token", res.data.token);
        setNeedData(true);
        setIsLoggingIn(false);
        setIsLoggedIn(true);
        auth.login(() => {
          router.push("/home");
        });
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("incorrect username or password");
          setIsLoggingIn(false);
        } else alert("something went wrong...");
        setIsLoggingIn(false);
      });
  };

  return (
    <LoginContainer>
      <LoginModal isLoggingIn={isLoggingIn}>
        <h1>Sign In</h1>
        <form>
          <input placeholder={"Username"} onChange={set("username")} />
          <input
            placeholder={"Password"}
            type={"password"}
            onChange={set("password")}
          />
          <button onClick={handleLogin}>
            {isLoggingIn ? (
              <i className='spin bi bi-arrow-clockwise'></i>
            ) : (
              <i className='bi bi-box-arrow-in-right'></i>
            )}
          </button>
        </form>
      </LoginModal>
    </LoginContainer>
  );
};

export default Login;
