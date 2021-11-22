import { HomeContainer, TitleCard, Option, EventList } from "./HomeElements";
import { momentLocalizer } from "react-big-calendar";
import "./react-big-calendar.module.css";
import moment from "moment";
import { CSSTransition } from "react-transition-group";

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
      <CSSTransition in={showMessage} classNames='slide-left' unmountOnExit>
        <TitleCard>FILING CHECK INS</TitleCard>
      </CSSTransition>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "30px",
        }}>
        <CSSTransition in={showMessage} classNames='slide-up' unmountOnExit>
          <Option
            onClick={() => {
              router.push("list?q=monthly");
            }}>
            Monthly
          </Option>
        </CSSTransition>
        <CSSTransition in={showMessage} classNames='slide-up' unmountOnExit>
          <Option
            onClick={() => {
              router.push("list?q=quarterly");
            }}>
            Quarterly
          </Option>
        </CSSTransition>
        <CSSTransition in={showMessage} classNames='slide-up' unmountOnExit>
          <Option
            onClick={() => {
              router.push("list?q=semi-annual");
            }}>
            Semi-Annual
          </Option>
        </CSSTransition>
      </div>
      <CSSTransition in={showMessage} classNames='slide-up' unmountOnExit>
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
