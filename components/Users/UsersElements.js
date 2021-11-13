import styled from "styled-components";

export const UsersContainer = styled.section`
  position: absolute;
  width: 60vw;
  height: 100vh;
  left: 20vw;
  transition: 0.4s;
  overflow-x: visible;
  @media (max-width: 990px) {
    width: 50vw;
    left: 25vw;
  }
  @media (max-width: 768px) {
    width: 80vw;
    left: 10vw;
  }
`;

export const Title = styled.h1`
  margin: 30px auto -30px;
  @media (max-width: 768px) {
    margin: -50px auto 50px;
  }
`;

export const TableContainer = styled.div`
  position: absolute;
  width: 80%;
  height: 50%;
  top: 15%;
  left: 10%;
  overflow-x: scroll;
  overflow-y: hidden;
  @media (max-width: 768px) {
    width: 95%;
    left: 2.5%;
  }
`;

export const UsersList = styled.table`
  width: 500px;
  margin: 15vh auto auto;
  border-collapse: collapse;
  thead {
    background-color: #222;
    color: white;
  }
  tbody {
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #00000033;
  z-index: 15;
  display: ${({ isModal }) => (isModal ? `` : `none`)};
`;

export const RegisterModal = styled.div`
  width: 30%;
  height: 30%;
  min-width: 250px;
  min-height: 400px;
  margin: 25vh auto;
  border-radius: 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    width: 3rem;
    margin-left: 60%;
  }
`;

export const CloseModal = styled.button`
  position: relative;
  margin: -30px auto 30px;
  border-radius: 10px;
`;

export const AddButton = styled.button`
  position: absolute;
  right: 10%;
  top: 10%;
`;

export const FormItem = styled.div`
  width: 60%;
  margin: 15px 20%;
  input {
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  margin: ${({ isSelected }) => (isSelected ? "-15px 0 0" : "0")};
  font-weight: ${({ isSelected }) => (isSelected ? "600" : "400")};
  font-size: ${({ isSelected }) => (isSelected ? ".8rem" : "1rem")};
  transition: 0.4s;
`;
