import { HomeContainer, Title } from "./HomeElements";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "./react-big-calendar.module.css";
import moment from "moment";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import Link from "next/link";

import { useContext } from "react";
import { ListContext } from "../ListContext/ListContext";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const localizer = momentLocalizer(moment);

export default function Home() {
  const { events, setEvents } = useContext(ListContext);
  const [nextEvents, setNextEvents] = useState(events);
  const [showMessage, setShowMessage] = useState(false);
  const router = useRouter();

  function handleClickDate(date) {
    const title = window.prompt("New Event Name");
    let day = `${new Date(date).toUTCString().split(" ")[0]} ${
      new Date(date).toUTCString().split(" ")[2]
    } ${new Date(date).toUTCString().split(" ")[1]} `;
    if (title) {
      setEvents([
        ...events,
        { title: title, start: date, end: date, day: day },
      ]);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 500);

    let nextEvents = [];

    events.forEach((event, idx) => {
      if (idx < 5) nextEvents.push(event);
    });

    setNextEvents(nextEvents);
  }, []);
  return (
    <HomeContainer>
      <Title>Home</Title>
      <CSSTransition
        in={showMessage}
        timeout={1000}
        classNames='slide-left'
        unmountOnExit>
        <TitleCard>FILING CHECK INS</TitleCard>
      </CSSTransition>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "30px",
        }}>
        <CSSTransition
          in={showMessage}
          timeout={1000}
          classNames='slide-up'
          unmountOnExit>
          <Option
            onClick={() => {
              router.push("list?q=monthly");
            }}>
            Monthly
          </Option>
        </CSSTransition>
        <CSSTransition
          in={showMessage}
          timeout={1000}
          classNames='slide-up'
          unmountOnExit>
          <Option
            onClick={() => {
              router.push("list?q=quarterly");
            }}>
            Quarterly
          </Option>
        </CSSTransition>
        <CSSTransition
          in={showMessage}
          timeout={1000}
          classNames='slide-up'
          unmountOnExit>
          <Option
            onClick={() => {
              router.push("list?q=semi-annual");
            }}>
            Semi-Annual
          </Option>
        </CSSTransition>
      </div>
      <CSSTransition
        in={showMessage}
        timeout={1000}
        classNames='slide-up'
        unmountOnExit>
        <EventList>
          <h2>Next 5 Reports Due</h2>
          <ul>
            {nextEvents.map((event) => {
              return (
                <li key={event.title}>
                  <p
                    style={{
                      display: "inline",
                      marginLeft: "10px",
                    }}>
                    {event.title}
                  </p>
                  <p
                    style={{
                      display: "inline",
                      marginLeft: "10px",
                      fontSize: "1rem",
                    }}>
                    {event.day}
                  </p>
                </li>
              );
            })}
          </ul>
        </EventList>
      </CSSTransition>
      {/* <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView='month'
        views={["month"]}
        events={events}
        style={{ height: "50vh" }}
        selectable={true}
        onSelectSlot={(e) => {
          handleClickDate(e.start);
        }}
      /> */}
    </HomeContainer>
  );
}

const TitleCard = styled.div`
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

const Option = styled.div`
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

const EventList = styled.div`
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
`;
