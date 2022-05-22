import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
0%{
  background-color: #ddd;
}
50%{
  background-color: #666;
}
100%{
  background-color: #ddd;
}
`;

export const Card = styled.li`
  list-style: none;
  height: 150px;
  width: 95%;
  max-width: 400px;
  border-radius: 20px;
  margin: 10px auto;
  box-shadow: 0 0 0.75rem #00000022;
  @media (max-width: 1024px) {
    height: 200px;
    min-width: 300px;
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

export const HeaderLoading = styled.div`
  height: 80%;
  width: 70%;
  margin: 5%;
  border-radius: 5px;
  animation: ${loadingAnimation} infinite 2s;
`;

export const LoadingContainer = styled.div`
  margin: 5%;
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
`;

export const ContentLoading = styled.div`
  height: 15%;
  width: 50%;
  margin-top: 5%;
  border-radius: 5px;
  animation: ${loadingAnimation} infinite 2s;
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

export const List = styled.ul`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  overflow-y: scroll;
  @media (max-width: 1024px) {
    display: ${({ isDisplayed }) => (isDisplayed ? `block` : `none`)};
    width: 100%;
  }
`;
