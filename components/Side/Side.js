import React, { useContext, useEffect, useState } from "react";
import { addEvent, getEvents } from "../../pages/api/index";
import {
  SideContainer,
  TotalsList,
  SideDisplayButton,
  TopBar,
  CalendarContainer,
  CalendarInput,
  Event,
  EventsContainer,
  EventForm,
} from "./SideElements";
import { CSVLink } from "react-csv";
import { ListContext } from "../ListContext/ListContext";
import convertToDayStr from "../../lib/convertToDayStr";
import convertGMTDate from "../../lib/convertGMTDate";

const Side = () => {
  const { list, events, setEvents } = useContext(ListContext);
  const [totals, setTotals] = useState({ notStarted: 0, started: 0, filed: 0 });
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [formValues, setFormValues] = useState({ date: "", title: "" });

  const toggleMenu = () => {
    setIsDisplayed(!isDisplayed);
  };

  //export data
  const headers = [
    { label: "Committee Name", key: "committeeName" },
    { label: "Status", key: "status" },
    { label: "Notes", key: "notes" },
    { label: "Date Filed", key: "dateFiled" },
    { label: "Report Id", key: "reportId" },
    { label: "POC", key: "poc" },
  ];

  const csvReport = {
    data: list,
    headers: headers,
    filename: `download_${new Date()}.csv`,
  };
  //set events
  useEffect(() => {
    getEvents()
      .then((response) => {
        let templist = [];
        response.data.forEach((item) => {
          templist.push(item);
          setEvents(
            templist.sort((a, b) => {
              return new Date(a.start) - new Date(b.start);
            })
          );
        });
      })
      .catch((err) => console.log(err));
  }, []);

  //add new event
  const handleSubmitEvent = (event) => {
    event.preventDefault();
    if (formValues.date !== "" && formValues.title !== "") {
      let day = convertToDayStr(formValues.date);
      let date = convertGMTDate(formValues.date);
      addEvent({
        title: formValues.title,
        start: date,
        end: date,
        day: day,
      });
      let newEvents = [
        ...events,
        {
          title: formValues.title,
          start: date,
          end: date,
          day: day,
        },
      ];
      setEvents(
        newEvents.sort((a, b) => {
          return new Date(a.start) - new Date(b.start);
        })
      );
      setFormValues({ date: "", title: "" });
    } else alert("Please Include All Event Fields");
  };

  //set totals data
  useEffect(() => {
    let notStarted = [];
    let started = [];
    let filed = [];
    for (let i = 0; i < list.length; i++) {
      if (list[i].status === 1) {
        notStarted.push(i);
      } else if (list[i].status === 2) {
        started.push(i);
      } else filed.push(i);
    }
    setTotals({
      notStarted: notStarted.length,
      started: started.length,
      filed: filed.length,
    });
  }, [list]);

  return (
    <SideContainer isDisplayed={isDisplayed}>
      <CalendarContainer isDisplayed={isDisplayed}>
        <EventForm>
          <CalendarInput onSubmit={handleSubmitEvent}>
            <span>{new Date().toDateString()}</span>
            <span>
              <label>Date: </label>
              <input
                value={formValues.date}
                type={"date"}
                onChange={({ target: { value } }) => {
                  setFormValues({ ...formValues, date: value });
                }}
              />
            </span>
            <span>
              <label>Event: </label>
              <input
                value={formValues.title}
                onChange={({ target: { value } }) =>
                  setFormValues({ ...formValues, title: value })
                }></input>
            </span>
            <span>
              <button type={`submit`}>Save</button>
            </span>
          </CalendarInput>
        </EventForm>
        <EventsContainer>
          {events.map((event, index) => {
            return (
              <Event key={`${index}+date`}>
                <h4>{event.title}</h4>
                <p>{event.day}</p>
              </Event>
            );
          })}
        </EventsContainer>
      </CalendarContainer>
      <TotalsList>
        <ul>
          <li key={"notstarted"}>
            <div>Not Started:</div>
            <p>{totals.notStarted}</p>
          </li>
          <li key={"started"}>
            <div>Started:</div>
            <p>{totals.started}</p>
          </li>
          <li key={"filed"}>
            <div>Filed:</div> <p>{totals.filed}</p>
          </li>
        </ul>
      </TotalsList>
      <CSVLink {...csvReport}>Export to CSV</CSVLink>
      <TopBar isDisplayed={isDisplayed} />
      <SideDisplayButton isDisplayed={isDisplayed} onClick={toggleMenu}>
        <i className='bi bi-menu-up'></i>
      </SideDisplayButton>
    </SideContainer>
  );
};

export default Side;
