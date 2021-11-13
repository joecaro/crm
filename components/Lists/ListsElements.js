import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: 100vh;
  margin: auto;
  overflow: hidden;
  @media (max-height: 1200px) {
    height: 75%;
  }
  @media (max-width: 768px) {
    width: 100vw;
    padding: 20px;
  }
`;

export const ListsContainer = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-x: visible;
  @media (max-height: 1200px) {
    height: 75%;
  }
`;

export const Title = styled.h1`
  margin: 100px auto -100px;
  @media (max-width: 768px) {
    margin: 30px auto -30px;
  }
`;

export const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;
  margin: auto;
  margin-top: 10vh;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1025px) {
    width: 410px;
  }
  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const ListButton = styled.span`
  background-color: black;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  width: 6em;
  text-align: center;
  white-space: nowrap;
  padding: 0 10px;
  border-radius: 5px;
  margin: 0 10%;
  display: flex;
  p {
    margin: auto;
  }
  @media (max-width: 1024px) {
    width: 6em;
    margin: 0;
    background-color: ${({ isDisplayed }) =>
      isDisplayed ? `#ef4737` : `black`};
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
  min-height: 545px;
  position: absolute;
  top: 25vh;
  left: 25vw;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 1024px) {
    height: 80vh;
    width: 98vw;
    top: 10vh;
    left: 1vw;
  }
`;

export const Form = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    height: 70%;
  }
  h3 {
    margin: 0;
  }

  div {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
      width: 90%;
      margin: auto auto 30px;
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
    width: 90%;
    padding: 5px;
    font-size: 1.2rem;
    color: #333;
    border-radius: 5px;
    border: 1px solid #00000077;
    margin-bottom: 5px;
    margin-left: 5%;
    :focus {
      outline: none;
      border: 2px solid #ef4737;
    }
  }

  select {
    font-size: 1.2rem;
    width: 95%;
    border-radius: 5px;
    margin-bottom: 5px;
    margin-left: 5%;
  }

  button {
    width: 50%;
    margin: 10px 0 5px auto;
    padding: 5px;
    border: none;
    border-radius: 5px;
    background-color: #dd6600;
    color: white;
    cursor: pointer;
    :hover {
      background-color: #fda640;
    }
  }
`;

export const CloseButton = styled.button`
  margin: auto;
  background-color: #ef4737;
  color: white;
  font-size: 1.2rem;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #ed5b77;
  }
`;
