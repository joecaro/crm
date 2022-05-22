import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 100px 40px;
`;

export const Title = styled.h1`
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
  margin: 0 auto;
`;

export const Option = styled.div`
  box-shadow: 0 0 10px #00000055;
  background-color: #ffc7c2;
  border-radius: 50px;
  box-shadow: 0 0 20px #00000022;
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  display: grid;

  padding: 0.75rem 1.5rem;

  cursor: pointer;
  transition: 100ms;
  :hover {
    background-color: #ef4737;
    color: #000;
  }
  :active {
    background-color: #ffb2ab;
  }
`;

export const EventList = styled.div`
  width: 50%;
  box-shadow: 0 0 20px #00000033;
  border-radius: 5px;
  padding: 20px;
  background-color: #eee;
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
