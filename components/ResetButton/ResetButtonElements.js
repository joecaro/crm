import styled from "styled-components";

export const ResetButtonStyles = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #0077cc;
  color: white;
  font-size: 1.2rem;
  padding: 2px 10px;
  outline: none;
  cursor: pointer;
  position: absolute;
  top: 110px;
  right: 30vw;
  @media (max-width: 768px) {
    top: 30px;
    right: 150px;
  }
  :hover {
    background-color: #77ccff;
  }
`;

export const Toast = styled.div`
  height: 50px;
  width: 250px;
  padding: 1rem;
  display: grid;
  place-items: center;
  border-radius: 0.5rem;
  background-color: #0d94f5;
  z-index: 999;
  color: white;
  font-weight: 600;
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translate(-50%, 0);
`;
