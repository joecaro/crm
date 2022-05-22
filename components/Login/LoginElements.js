import styled from "styled-components";
import { css } from "styled-components";
import { keyframes } from "styled-components";

export const LoginContainer = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: white;
  background-image: url("https://res.cloudinary.com/joecarothers/image/upload/v1636828025/misc/R_mflf3z.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 999;
`;

export const LoginModal = styled.div`
  position: relative;
  width: 50%;
  max-width: 400px;
  height: fit-content;
  margin: 25% auto;
  border-radius: 0.5rem;
  background-color: #000000cc;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: white;
    align-self: center;
    font-size: 2rem;
    margin-bottom: 40px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    border: 1px solid #eee;
    width: 60%;
    max-width: 200px;
    font-size: 1.2rem;
    padding: 4px 10px;
    align-self: center;
    margin: 10px;
  }
  button {
    width: 3rem;
    margin: 10px auto 10px 70%;
    padding: 5px;
    border: none;
    background-color: ${({ isLoggingIn }) =>
      isLoggingIn ? "#00000000" : "#c75e32"};
    color: white;
    font-size: ${({ isLoggingIn }) => (isLoggingIn ? "1.5rem" : "1rem")};
    cursor: ${({ isLoggingIn }) => (isLoggingIn ? "not-allowed" : "pointer")};
    :hover {
      background-color: ${({ isLoggingIn }) =>
        isLoggingIn ? "#00000000" : "#e97f54"};
    }
    animation: ${({ isLoggingIn }) => (isLoggingIn ? spinningAnimation : "")};
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const spinningKeyframes = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;

const spinningAnimation = (props) => css`
  ${spinningKeyframes} 1s
`;
