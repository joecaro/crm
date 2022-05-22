import styled from "styled-components";

export const CreateButtonContainer = styled.div`
  height: 26px;
  width: 50px;
`;

export const CreateModal = styled.div`
  position: fixed;
  height: ${({ isSelected }) => (isSelected ? "400px" : "0")};
  width: ${({ isSelected }) => (isSelected ? "300px" : "0")};
  top: ${({ isSelected }) => (isSelected ? "130px" : "110px")};
  right: ${({ isSelected }) => (isSelected ? "30vw" : "25vw")};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  margin: auto;
  overflow: hidden;
  background-color: #fafafa;
  box-shadow: 1px 1px 5px #00000033;
  transition: 0.2s;
  z-index: 999;
  @media (max-width: 768px) {
    top: 55px;
    right: 10vw;
  }
  h1 {
    margin: 10px;
  }
`;

export const Form = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  select {
    font-size: 1.2rem;
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  label {
    margin-top: 10px;
    margin-bottom: 5px;
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
    border-radius: 5px;
    border: 1px solid black;
    font-size: 1.2rem;
    padding: 4px;
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
