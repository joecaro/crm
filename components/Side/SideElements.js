import styled from "styled-components";

export const SideContainer = styled.section`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: 0.4s;
  z-index: 99;
  background-color: #efefef;
  padding: 30% 0;

  overflow-y: scroll;

  .heading {
    font-size: 1.5rem;
    font-weight: 600;
    color: #888;
    margin: 0 0.5rem;
  }
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
  @media (min-width: 1250px) {
    position: relative;
  }
  @media (max-width: 1250px) {
    margin-right: ${({ isDisplayed }) => (isDisplayed ? `0` : `-98%`)};
    box-shadow: inset 0 0 2px #666;
    width: 100%;
    padding: 0 10%;
  }
  p {
    margin: 0;
  }
`;

export const CalendarContainer = styled.div`
  margin-top: 18vh;
  padding: 10px;
  @media (max-width: 768px) {
    margin-left: ${({ isDisplayed }) => (isDisplayed ? `0` : `100%`)};
    transition: 0.2s;
  }
`;

export const EventForm = styled.form`
  display: grid;
  gap: 1rem;
  padding: 0.5rem;
  span {
    font-size: 1.25rem;
    font-weight: 700;
    color: #888;
  }
  label {
    display: grid;
    font-weight: 600;
  }
  input {
    font-size: 1rem;
  }
  button {
    width: fit-content;
    font-size: 1rem;
    background-color: #0077cc;
    border: none;
    border-radius: 0.25rem;
    padding: 0.25rem 0.5rem;
    color: white;
    justify-self: end;
  }
`;

export const EventsContainer = styled.div`
  height: clamp(100px, 30vh, 600px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: scroll;
  background-color: white;
  border: 0.5rem solid #efefef;
  padding: 0.5rem;
`;
export const Event = styled.object`
  width: 90%;
  background-color: #ddd;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .delete-button {
    align-self: flex-end;
    border: none;
    font-size: 1.5rem;
    align-self: flex-start;
    border-top-right-radius: 0.5rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
  }
  h4 {
    margin: 0.5rem 0.5rem;
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
  width: 80%;
  margin: 0 auto;
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
  color: black;
  top: 0;
  right: 5px;
  transform: ${({ isDisplayed }) =>
    isDisplayed ? `rotate(90deg)` : `rotate(-90deg)`};
  z-index: 11;
  transition: 0.4s;
  @media (min-width: 1250px) {
    display: none;
  }
`;
