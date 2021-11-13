import styled from "styled-components";

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
  z-index: 99;
`;

export const LoginModal = styled.div`
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
    cursor: pointer;
    :hover {
      background-color: ${({ isLoggingIn }) =>
        isLoggingIn ? "#00000000" : "#e97f54"};
    }
  }
`;
