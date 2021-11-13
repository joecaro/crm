import React, { useState, useEffect, useContext } from "react";
import CommitteeCard from "../CommitteeCard/CommitteeCard";
import {
  Container,
  ButtonContainer,
  CloseButton,
  Form,
  ListButton,
  ListsContainer,
  ModalBox,
  ModalContainer,
  Title,
} from "./ListsElements";
import { updateCommittee, updateReport } from "../../pages/api/index";
import { ListContext } from "../ListContext/ListContext";
import CreateNewButton from "../CreateNewButton/CreateNewButton";
import ResetButton from "../ResetButton/ResetButton";
import SearchBar from "../SearchBar/SearchBar";

export default function Lists(props) {
  const { allCommittees, setAllCommittees, setList } = useContext(ListContext);
  const [isDisplayed, setIsDisplayed] = useState({
    notStarted: true,
    started: false,
    filed: false,
  });
  const [isModal, setIsModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [search, setSearch] = useState("");

  const handleSetSearch = (event) => {
    return ({ target: { value } }) => {
      setSearch(value.toLowerCase());
    };
  };
  function toggleModal(item) {
    dispatch({ type: "toggleModal", payload: item });
    setIsModal(!isModal);
  }

  useEffect(() => {
    let tempList = [];
    allCommittees.forEach((item) => {
      if (
        item.filingFrequency !== props.selectedList ||
        !item.committeeName.toLowerCase().includes(search)
      ) {
        return;
      } else tempList.push(item);
    });
    tempList.sort((a, b) => {
      let fa = a.committeeName.toLowerCase(),
        fb = b.committeeName.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    setList(tempList);
  }, [allCommittees, props.selectedList, search]);

  function toggleModal(item) {
    setModalInfo(item);
    setIsModal(!isModal);
  }
  function toggleNot() {
    setIsDisplayed({ notStarted: true, started: false, filed: false });
  }
  function toggleStarted() {
    setIsDisplayed({ notStarted: false, started: true, filed: false });
  }
  function toggleFiled() {
    setIsDisplayed({ notStarted: false, started: false, filed: true });
  }

  return (
    <Container>
      <Modal
        modalInfo={modalInfo}
        isModal={isModal}
        toggleModal={toggleModal}
        setAllCommittees={setAllCommittees}
        allCommittees={allCommittees}
      />
      <Title>
        {props.selectedList === "monthly"
          ? "Monthly"
          : props.selectedList === "quarterly"
          ? "Quarterly"
          : "Semi-Annual"}
      </Title>
      <CreateNewButton />
      <ResetButton selectedList={props.selectedList} />
      <ButtonContainer>
        <ListButton isDisplayed={isDisplayed.notStarted} onClick={toggleNot}>
          <p>Not Started</p>
        </ListButton>
        <ListButton isDisplayed={isDisplayed.started} onClick={toggleStarted}>
          <p>Started</p>
        </ListButton>
        <ListButton isDisplayed={isDisplayed.filed} onClick={toggleFiled}>
          <p>Filed</p>
        </ListButton>
      </ButtonContainer>
      <ListsContainer>
        <SearchBar handleSetSearch={handleSetSearch} />

        <CommitteeCard
          allCommittees={allCommittees}
          status={1}
          isDisplayed={isDisplayed.notStarted}
          toggleModal={toggleModal}
        />
        <CommitteeCard
          allCommittees={allCommittees}
          status={2}
          isDisplayed={isDisplayed.started}
          toggleModal={toggleModal}
        />
        <CommitteeCard
          allCommittees={allCommittees}
          status={3}
          isDisplayed={isDisplayed.filed}
          toggleModal={toggleModal}
        />
      </ListsContainer>
    </Container>
  );
}

function Modal(props) {
  const [committeeInfo, setCommitteeInfo] = useState({
    committeeName: "",
    filingFrequency: "",
    poc: "",
    pocEmail: "",
  });
  const [reportInfo, setReportInfo] = useState({
    notes: "",
    reportId: "",
    dateFiled: "",
  });

  const setCom = (name) => {
    return ({ target: { value } }) => {
      setCommitteeInfo((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const setReport = (name) => {
    return ({ target: { value } }) => {
      setReportInfo((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  function closeModal() {
    props.toggleModal({});
    setCommitteeInfo({
      committeeName: "",
      filingFrequency: "",
      poc: "",
      pocEmail: "",
    });
    setReportInfo({
      notes: "",
      reportId: "",
      dateFiled: "",
    });
  }

  const handleCommitteeSubmit = async (id) => {
    try {
      let response = await updateCommittee(id, committeeInfo);
      console.log(response);
      const newList = props.allCommittees.map((item) => {
        if (item._id === id) {
          const updatedItem = {
            ...item,
            committeeName: committeeInfo.committeeName,
            filingFrequency: committeeInfo.filingFrequency,
            poc: committeeInfo.poc,
            pocEmail: committeeInfo.pocEmail,
          };
          return updatedItem;
        }

        return item;
      });
      props.setAllCommittees(newList);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  const handleReportSubmit = async (id) => {
    try {
      await updateReport(id, reportInfo);
      const newList = props.allCommittees.map((item) => {
        if (item._id === id) {
          const updatedItem = {
            ...item,
            notes: reportInfo.notes,
            reportId: reportInfo.reportId,
            dateFiled: reportInfo.dateFiled,
          };
          return updatedItem;
        }

        return item;
      });
      props.setAllCommittees(newList);
      closeModal();
    } catch (err) {
      console.log(err);
      alert("something went wrong...");
    }
  };

  useEffect(() => {
    setCommitteeInfo({
      committeeName: props.modalInfo.committeeName,
      filingFrequency: props.modalInfo.filingFrequency,
      poc: props.modalInfo.poc,
    });
    setReportInfo({
      notes: props.modalInfo.notes ? props.modalInfo.notes : "",
      reportId: props.modalInfo.reportId ? props.modalInfo.reportId : "",
      dateFiled: props.modalInfo.dateFiled ? props.modalInfo.dateFiled : "",
    });
  }, [props.modalInfo]);

  return (
    <ModalContainer isModal={props.isModal}>
      <ModalBox>
        <h1>{props.modalInfo.committeeName}</h1>
        <Form>
          <div>
            <h3>Committee Info</h3>
            <label htmlFor={"committeeName"}>
              <h4>Name</h4>
            </label>
            <input
              onChange={setCom("committeeName")}
              value={committeeInfo.committeeName}
              id={"committeeName"}
            />
            <label htmlFor={"filingFrequency"}>
              <h4>Filing Frequency</h4>
            </label>
            <select onChange={setCom("filingFrequency")} id={"filingFrequency"}>
              <option value={""}>Select Option</option>
              <option value={"monthly"}>Monthly</option>
              <option value={"quarterly"}>Quarterly</option>
              <option value={"semi-annual"}>Semi-Annual</option>
            </select>
            <label htmlFor={"poc"}>
              <h4>POC</h4>
            </label>
            <input
              onChange={setCom("poc")}
              value={committeeInfo.poc}
              id={"poc"}
            />
            <label htmlFor={"pocEmail"}>
              <h4>POC Email</h4>
            </label>
            <input
              onChange={setCom("pocEmail")}
              value={committeeInfo.pocEmail}
              id={"pocEmail"}
            />
            <button onClick={() => handleCommitteeSubmit(props.modalInfo._id)}>
              Update
            </button>
          </div>
          <div>
            <h3>Report Info</h3>
            <label htmlFor={"notes"}>
              <h4>Notes</h4>
            </label>
            <input
              onChange={setReport("notes")}
              value={reportInfo.notes}
              id={"notes"}
            />
            <label htmlFor={"reportId"}>
              <h4>Report Id</h4>
            </label>
            <input
              onChange={setReport("reportId")}
              value={reportInfo.reportId}
              id={"reportId"}
            />
            <label htmlFor={"dateFiled"}>
              <h4>Date Filed</h4>
            </label>
            <input
              type={"date"}
              onChange={setReport("dateFiled")}
              value={reportInfo.dateFiled}
              id={"dateFiled"}
            />
            <button onClick={() => handleReportSubmit(props.modalInfo._id)}>
              Update
            </button>
          </div>
        </Form>
        <CloseButton onClick={closeModal}>Close Modal</CloseButton>
      </ModalBox>
    </ModalContainer>
  );
}
