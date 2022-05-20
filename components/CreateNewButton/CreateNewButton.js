import React, { useState } from "react";
import { useListContext } from "../../Context/ListContext";
import { addCommittee } from "../../pages/api/index";
import {
  AddButton,
  CreateButtonContainer,
  CreateModal,
  Form,
} from "./CreateNewButtonElements";

export default function CreateNewButton() {
  const { allCommittees, setAllCommittees } = useListContext();
  const [isSelected, setIsSelected] = useState(false);
  const [committeeInfo, setCommitteeInfo] = useState({
    committeeName: "",
    committeeFecId: "",
    filingFrequency: "monthly",
    poc: "",
    pocEmail: "",
  });

  const handleCommitteeSubmit = async () => {
    setIsSelected(!isSelected);
    let token = localStorage.getItem("token");
    try {
      let response = await addCommittee(token, committeeInfo);
      alert("committee created");
      console.log(response);
      setAllCommittees([...allCommittees, committeeInfo]);
      setCommitteeInfo({
        committeeName: "",
        committeeFecId: "",
        filingFrequency: "monthly",
        poc: "",
        pocEmail: "",
      });
    } catch (err) {
      console.log(err);
      alert("there was an error ");
    }
  };

  const setCom = (name) => {
    return ({ target: { value } }) => {
      setCommitteeInfo((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  return (
    <CreateButtonContainer>
      <AddButton onClick={() => setIsSelected(!isSelected)}>Add</AddButton>
      <CreateModal isSelected={isSelected}>
        <h3>Create New Committee</h3>
        <Form key={"createForm"}>
          <div>
            <label htmlFor={"committeeName"}>
              <h4>Name</h4>
            </label>
            <input
              onChange={setCom("committeeName")}
              value={committeeInfo.committeeName}
              id={"committeeName"}
            />
            <label htmlFor={"committeeName"}>
              <h4>FEC Id</h4>
            </label>
            <input
              onChange={setCom("committeeFecId")}
              value={committeeInfo.committeeFecId}
              id={"committeeFecId"}
            />
            <label htmlFor={"filingFrequency"}>
              <h4>Filing Frequency</h4>
            </label>
            <select onChange={setCom("filingFrequency")} id={"filingFrequency"}>
              <option value={"monthly"}>monthly</option>
              <option value={"quarterly"}>quarterly</option>
              <option value={"semi-annual"}>semi-annual</option>
            </select>
            <label htmlFor={"poc"}>
              <h4>POC</h4>
            </label>
            <input
              onChange={setCom("poc")}
              value={committeeInfo.poc}
              id={"poc"}
            />
            <button onClick={() => handleCommitteeSubmit()}>Save</button>
          </div>
        </Form>
      </CreateModal>
    </CreateButtonContainer>
  );
}
