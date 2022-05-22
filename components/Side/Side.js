import React, { useContext, useEffect, useState } from "react";
import { addEvent, deleteEvent, getEvents } from "../../pages/api/index";
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
  DeleteButton,
} from "./SideElements";
import { CSVLink } from "react-csv";
import convertToDayStr from "../../lib/convertToDayStr";
import convertGMTDate from "../../lib/convertGMTDate";
import { useListContext } from "../../Context/ListContext";

const Side = () => {
  const { list, events, setEvents } = useListContext();
  const [totals, setTotals] = useState({ notStarted: 0, started: 0, filed: 0 });
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [waiting, setWaiting] = useState(false);
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

  const handleDeleteEvent = (id) => {
    console.log("attempting delete");
    if (waiting) return;

    setWaiting(true);
    try {
      deleteEvent(id)
        .then((res) => console.log(res))
        .then(() => {
          let newEventList = [...events];
          let filteredEvents = newEventList.filter((event) => event._id !== id);

          setEvents(filteredEvents);
          setWaiting(false);
        });
    } catch (err) {
      console.log(err);
    }
  };

  //add new event
  const handleSubmitEvent = async (event) => {
    event.preventDefault();
    if (formValues.date !== "" && formValues.title !== "") {
      let day = convertToDayStr(formValues.date);
      let date = convertGMTDate(formValues.date);
      try {
        let res = await addEvent({
          title: formValues.title,
          start: date,
          end: date,
          day: day,
        });
        console.log(res);
        let newEvents = [
          ...events,
          {
            _id: res.data.event._id,
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
      } catch (err) {
        console.log(err);
      }
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
      <EventForm onSubmit={handleSubmitEvent}>
        <span>{new Date().toDateString()}</span>
        <label htmlFor='date'>
          Date:
          <input
            id='date'
            name='date'
            value={formValues.date}
            type={"date"}
            onChange={({ target: { value } }) => {
              setFormValues({ ...formValues, date: value });
            }}
          />
        </label>
        <label htmlFor='title'>
          Event:
          <input
            id='title'
            name='title'
            value={formValues.title}
            onChange={({ target: { value } }) =>
              setFormValues({ ...formValues, title: value })
            }></input>
        </label>
        <button type={`submit`}>Save</button>
      </EventForm>
      <EventsContainer>
        {events.map((event, index) => {
          return (
            <Event key={`${index}+date`}>
              <DeleteButton onClick={() => handleDeleteEvent(event._id)}>
                x
              </DeleteButton>
              <h4>{event.title}</h4>
              <p>{event.day}</p>
            </Event>
          );
        })}
      </EventsContainer>
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
      <SideDisplayButton isDisplayed={isDisplayed} onClick={toggleMenu}>
        <i className='bi bi-menu-up'></i>
      </SideDisplayButton>
    </SideContainer>
  );
};

export default Side;
