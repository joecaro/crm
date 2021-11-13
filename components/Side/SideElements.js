import styled from "styled-components";

export const SideContainer = styled.section`
  height: 100vh;
  width: 250px;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  transition: 0.4s;
  z-index: 10;
  background-color: white;
  a {
    text-decoration: none;
    background-color: #0077cc;
    color: white;
    width: fit-content;
    padding: 5px;
    border-radius: 5px;
    align-self: flex-end;
    margin: 10px 25px;
    :hover {
      background-color: #77ccff;
    }
  }
  @media (max-width: 1250px) {
    width: 200px;
  }
  @media (max-width: 768px) {
    margin-right: ${({ isDisplayed }) => (isDisplayed ? `0` : `-98%`)};
    box-shadow: inset 0 0 2px #666;
    width: 100%;
  }
`;

export const CalendarContainer = styled.section`
  margin-top: 18vh;
  padding: 10px;
  @media (max-width: 768px) {
    margin-left: ${({ isDisplayed }) => (isDisplayed ? `0` : `100%`)};
    transition: 0.2s;
  }
`;

export const EventForm = styled.div`
  height: 10vh;
`;

export const CalendarInput = styled.form`
  height: 5rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
  span {
    width: 100%;
    display: flex;
    align-items: center;
  }
  label {
    font-weight: 600;
  }
  button {
    margin-top: 5px;
    margin-left: 80%;
    border: none;
    background-color: #ef4737;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    :hover {
      background-color: #e96780;
    }
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  input {
    border: none;
    border-radius: 0;
    outline: none;
    text-align: center;
    font-size: 1.1rem;
    width: 80%;
    min-width: 80%;
    border-bottom: 1px solid black;
    @media (max-width: 768px) {
      margin-bottom: 10px;
    }
  }
`;

export const EventsContainer = styled.div`
  height: 25vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  @media (max-height: 870px) {
    margin-top: 50px;
  }
`;
export const Event = styled.object`
  height: 7vh;
  width: 90%;
  background-color: #ddd;
  border-radius: 10px;
  margin: 5px auto;
  display: flex;
  flex-direction: column;
  h4 {
    margin: 0 10px;
  }
  p {
    margin: auto;
  }
  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const TotalsList = styled.div`
  background-color: #ef4737;
  border-radius: 10px;
  height: 170px;
  width: 80%;
  margin-left: 10%;
  margin-top: 8vh;
  ul {
    margin-left: -40px;
  }
  li {
    width: 80%;
    list-style: none;
    font-size: 0.9rem;
    font-weight: 600;
    color: white;
    margin: 25px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  div {
    display: inline;
  }
  p {
    color: white;
    display: inline;
    font-size: 1.3rem;
    margin: 0;
  }
`;

export const SideDisplayButton = styled.div`
  position: fixed;
  font-size: 1.7rem;
  padding: 10px;
  color: ${({ isDisplayed }) => (isDisplayed ? `white` : `black`)};
  top: 0;
  right: 5px;
  transform: ${({ isDisplayed }) =>
    isDisplayed ? `rotate(90deg)` : `rotate(-90deg)`};
  z-index: 11;
  transition: 0.4s;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const TopBar = styled.div`
  position: absolute;
  height: 75px;
  width: 250px;
  z-index: 11;
  background-color: black;
  transition: 0.4s;
  @media (max-width: 768px) {
    margin-left: ${({ isDisplayed }) => (isDisplayed ? `0` : `100%`)};
    width: 100%;
  }
`;
