import styled from "styled-components";

export const HomeContainer = styled.section`
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
  margin: 40px auto;
  @media (max-width: 768px) {
    margin: -50px auto 50px;
  }
`;
