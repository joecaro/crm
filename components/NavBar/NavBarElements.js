import styled from "styled-components";

export const NavContainer = styled.section`
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;
  transition: 0.4s;
  color: white;
  z-index: 10;
  @media (min-width: 1250px) {
    position: relative;
  }
  @media (max-width: 1250px) {
    margin-left: ${({ isDisplayed }) => (isDisplayed ? `0` : `-200px`)};
    width: 200px;
    z-index: 9;
  }
  p {
    color: white;
    margin: auto auto 10vh auto;
    cursor: pointer;
  }
`;

export const MenuDisplayButton = styled.div`
  position: fixed;
  font-size: 2rem;
  padding: 10px;
  top: 0;
  color: ${({ isDisplayed }) => (isDisplayed ? `white` : `black`)};
  z-index: ${({ isDisplayed }) => (isDisplayed ? `11` : `1`)};
  transition: 0.4s;
  @media (min-width: 1250px) {
    display: none;
  }
`;

export const NavBarElements = styled.section`
  margin: 10vh auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.5rem;
  div {
    margin-bottom: 15px;
    cursor: pointer;
    :hover {
      background-color: #222;
    }
  }
  a {
    height: 3rem;
    color: white;
    text-decoration: none;
    display: flex;
    :hover {
      background-color: #222;
      transition: 0.2s ease-in-out;
    }
  }
  i {
    font-size: 0.8em;
    margin: auto 15px;
  }
  span {
    margin: auto 0;
  }
`;
