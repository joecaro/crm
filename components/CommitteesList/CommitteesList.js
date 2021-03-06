import React, { useEffect, useState } from "react";
import CommitteesListCard from "../CommitteesListCard/CommitteesListCard";
import SearchBar from "../SearchBar/SearchBar";
import {
  ListContainer,
  ModalBox,
  ModalContainer,
  Form,
} from "./CommitteesListElements";
import {
  updateCommittee,
  deleteCommittee,
  getList,
} from "../../pages/api/index";
import CreateNewButton from "../CreateNewButton/CreateNewButton";
import { useListContext } from "../../Context/ListContext";
import useModal from "../../hooks/useModal";
import useSearch from "../../hooks/useSearch";
import { Header, Title } from "../Lists/ListsElements";

const CommitteesList = () => {
  const { allCommittees, setAllCommittees, list, setList, isLoading } =
    useListContext();
  const [isModal, modalState, toggleModal] = useModal();
  const [search, handleSetSearch] = useSearch();

  useEffect(() => {
    let tempList = [];
    allCommittees.forEach((item) => {
      if (!item.committeeName.toLowerCase().includes(search)) {
        return;
      } else tempList.push(item);
    });
    setList(tempList);
  }, [allCommittees, search]);

  return (
    <ListContainer>
      <Header>
        <Title>All Committees</Title>
        <CreateNewButton />
      </Header>
      <SearchBar handleSetSearch={handleSetSearch} />
      <Modal
        state={modalState}
        isModal={isModal}
        toggleModal={toggleModal}
        setAllCommittees={setAllCommittees}
        allCommittees={allCommittees}
      />
      <CommitteesListCard
        list={list}
        status={1 || 2 || 3}
        isLoading={isLoading}
        toggleModal={toggleModal}
      />
    </ListContainer>
  );
};

export default CommitteesList;

const Modal = (props) => {
  const { allCommittees, setAllCommittees } = useListContext();
  const [committeeInfo, setCommitteeInfo] = useState({
    committeeName: props.state.committeeName,
    filingFrequency: props.state.filingFrequency,
    poc: props.state.poc,
    pocEmail: "",
  });

  const setCom = (name) => {
    return ({ target: { value } }) => {
      setCommitteeInfo((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  const closeModal = () => {
    props.toggleModal({
      committeeName: "",
      filingFrequency: "",
      poc: "",
      pocEmail: "",
    });
    setCommitteeInfo({
      committeeName: "",
      filingFrequency: "",
      poc: "",
      pocEmail: "",
    });
  };

  const handleCommitteeSubmit = async (id) => {
    try {
      let response = await updateCommittee(id, committeeInfo);
      console.log(response);
      const newList = allCommittees.map((item) => {
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
      setAllCommittees(newList);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (id) => {
    deleteCommittee(id).then((res) => alert(res.data));
    let token = localStorage.getItem("token");
    getList(token)
      .then((response) => {
        setAllCommittees(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ModalContainer isModal={props.isModal}>
      <ModalBox>
        <h1>{props.state.committeeName}</h1>
        <Form>
          <div>
            <h3>Committee Info</h3>
            <label htmlFor={"committeeName"}>
              <h4>Name</h4>
              <p>{props.state.committeeName}</p>
            </label>
            <input
              onChange={setCom("committeeName")}
              value={committeeInfo.committeeName}
              id={"committeeName"}
            />
            <label htmlFor={"filingFrequency"}>
              <h4>Filing Frequency</h4>
              <p>{props.state.filingFrequency}</p>
            </label>
            <select onChange={setCom("filingFrequency")} id={"filingFrequency"}>
              <option value={""}>Select Option</option>
              <option value={"monthly"}>Monthly</option>
              <option value={"quarterly"}>Quarterly</option>
              <option value={"semi-annual"}>Semi-Annual</option>
            </select>
            <label htmlFor={"poc"}>
              <h4>POC</h4>
              <p>{props.state.poc}</p>
            </label>
            <input
              onChange={setCom("poc")}
              value={committeeInfo.poc}
              id={"poc"}
            />
            <label htmlFor={"pocEmail"}>
              <h4>POC Email</h4>
              <p>{props.state.pocEmail}</p>
            </label>
            <input onChange={setCom("pocEmail")} id={"pocEmail"} />
            <button onClick={() => handleCommitteeSubmit(props.state._id)}>
              Update
            </button>
          </div>
        </Form>
        <button
          style={{ margin: `auto auto -70px 100px` }}
          onClick={() => handleDelete(props.state._id)}>
          DELETE
        </button>
        <button style={{ margin: `auto 100px auto auto` }} onClick={closeModal}>
          Close Modal
        </button>
      </ModalBox>
    </ModalContainer>
  );
};
