import styled from "styled-components";

export const HomeContainer = styled.section`
  position: absolute;
  width: 60vw;
  height: 100vh;
  top: 100px;
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
    display: grid;
    justify-items: center;
    top: 0;
  }
`;

export const Title = styled.h1`
  margin: 40px auto;
  @media (max-width: 768px) {
    margin: -50px auto 50px;
  }
`;

export const TitleCard = styled.div`
  width: 300px;
  height: 100px;
  background-color: #ef4737;
  border-radius: 5px;
  box-shadow: 0 0 20px #00000022;
  font-size: 2rem;
  font-weight: 700;
  color: white;
  display: grid;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

export const Option = styled.div`
  width: 25%;
  min-width: 180px;
  aspect-ratio: 3;
  box-shadow: 0 0 10px #00000055;
  background-color: #ef473755;
  border-radius: 50px;
  box-shadow: 0 0 20px #00000022;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s ease-out;
  margin: 10px;
  :hover {
    background-color: #ef4737;
    color: #000;
  }
`;

export const EventList = styled.div`
  width: 50%;
  box-shadow: 0 0 20px #00000033;
  border-radius: 5px;
  padding: 20px;
  background-color: #eee;
  margin: 0 40px;
  h2 {
    margin: 0;
    border-bottom: 2px solid #ddd;
  }
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    margin: 10px;
    padding: 0 20px;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
