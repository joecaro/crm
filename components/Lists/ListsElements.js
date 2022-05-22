import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding: 20px;
  margin: auto;
  display: grid;
  grid-template-rows: 50px 50px 50px 1fr;
  gap: 1rem;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  align-items: center;
`;

export const Title = styled.h1``;

export const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 150px - 3rem - 40px);
`;

export const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
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
  :hover {
    cursor: pointer;
    background: #555;
  }
  :active {
    background: #222;
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
