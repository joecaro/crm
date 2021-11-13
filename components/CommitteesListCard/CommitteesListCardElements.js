import styled from "styled-components";

export const Card = styled.object`
  list-style: none;
  height: 125px;
  width: 95%;
  max-width: 225px;
  border-radius: 20px;
  margin: 10px auto;
  box-shadow: 0 0 0.75rem #00000022;
  cursor: pointer;
  @media (max-width: 1024px) {
    height: 200px;
    min-width: 300px;
  }
  @media (min-width: 1920px) {
    max-width: 300px;
  }
  :hover {
    background-color: #ef4737;
    color: white;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  i {
    padding: 10px 20px;
    font-size: 1.5em;
    cursor: pointer;
  }
`;

export const CommitteeName = styled.p`
  margin: 0;
  padding-left: 15px;
  font-weight: 700;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const Content = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 75% 25%;
  font-size: 1.25rem;
  color: #999;
`;

export const CommitteeInfo = styled.section`
  width: 90%;
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  p {
    margin: 0 0 5px 10%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Buttons = styled.section`
  margin-top: 20%;
  grid-column: 2;
  display: flex;
  flex-direction: column;
`;
export const Circle = styled.div`
  cursor: pointer;
  height: 25px;
  width: 25px;
  border-radius: 100%;
  color: white;
  text-align: center;
  background-color: #ef4737;
  margin: 5px auto;
  :hover {
    background-color: #dd000066;
  }
  @media (max-width: 1024px) {
    height: 30px;
    width: 30px;
  }
`;

export const List = styled.div`
  padding: 0;
  height: 80%;
  width: 100%;
  margin-top: 10vh;

  overflow-y: scroll;
  overflow-x: hidden;
  display: flex;
  flex-wrap: wrap;
  @media (max-height: 800px) {
    margin-top: 3vh;
  }
`;
