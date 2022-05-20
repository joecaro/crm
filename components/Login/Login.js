import { useEffect, useState } from "react";
import { LoginContainer, LoginModal } from "./LoginElements";
import "../../styles/spin.module.css";
import { login } from "../../pages/api/index";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { css } from "styled-components";
import { useListContext } from "../../Context/ListContext";

const Login = (props) => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const { setIsLoggedIn, setNeedData, auth } = useListContext();
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
        <ToolTip>
          <p className='header'>Demo Credentials</p>
          <div className='credentials'>
            <p>Username: test</p>
            <p>Password: test</p>
          </div>
        </ToolTip>
      </LoginModal>
    </LoginContainer>
  );
};

export default Login;

const animation = keyframes`
0% {
  transform: translateY(-90%);
  opacity: 0;
}
75% {
  transform: translateY(-90%);
  opacity: 0;
}
100% {
  transform: translateY(-110%);
  opacity: 1;
}


`;
const enterAnim = (props) => css`
  ${animation} 1000ms;
`;

const ToolTip = styled.div`
  width: fit-content;
  background-color: #00000099;
  border-radius: 0.5rem;
  padding: 0.5rem;

  display: grid;
  color: #efefef;
  font-weight: 500;
  border: 2px solid #bbb;

  position: absolute;
  top: 0;
  right: 0;
  transform: translateY(-110%);

  animation: ${enterAnim} .header {
    font-size: 1.4rem;
  }

  .credentials {
    font-size: 1.2rem;
  }

  p {
    margin: 0;
  }
`;
