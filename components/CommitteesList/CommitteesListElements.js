import styled from "styled-components";

export const ListContainer = styled.section`
  height: 100vh;
  margin: auto;
  display: grid;
  grid-template-rows: 150px 50px 1fr;
`;

export const Title = styled.h1`
  margin: 30px auto -30px;
  @media (max-width: 768px) {
    margin: -50px auto 50px;
  }
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #00000033;
  z-index: 15;
  display: ${({ isModal }) => (isModal ? `` : `none`)};
`;

export const ModalBox = styled.div`
  height: 50vh;
  width: 50vw;
  position: absolute;
  top: 25vh;
  left: 25vw;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 768px) {
    height: 60vh;
    width: 98vw;
    top: 20vh;
    left: 1vw;
  }
  button {
    width: fit-content;
  }
`;

export const Form = styled.section`
  display: flex;
  justify-content: center;
  height: 50%;
  padding: 20px;
  h3 {
    margin: 0;
  }
  div {
    width: 40%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 80%;
    }
  }
  label {
    margin-top: 10px;
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    h4 {
      margin: 0;
      font-size: 1rem;
    }
    p {
      margin: 0 0 0 auto;
    }
  }
  input {
    width: 100%;
    color: #333;
  }
  button {
    width: 50%;
    margin: 10px 0 5px auto;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #dd6600;
    color: white;
  }
`;
