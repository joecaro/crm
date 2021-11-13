import React, { useState, useEffect } from "react";
import {
  RegisterModal,
  UsersContainer,
  ModalContainer,
  FormItem,
  FormLabel,
  CloseModal,
  AddButton,
  UsersList,
  TableContainer,
  Title,
} from "./UsersElements";
import { getUsers, register } from "../../api";

export default function Users() {
  const [isModal, setIsModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [selected, setSelected] = useState({
    email: false,
    firstName: false,
    lastName: false,
    username: false,
    password: false,
  });

  const [values, setValues] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const [users, setUsers] = useState([
    { firstName: `loading`, lastName: `loading`, email: `loading` },
    { firstName: `loading`, lastName: `loading`, email: `loading` },
  ]);

  useEffect(() => {
    let mounted = true;
    let token = localStorage.getItem("token");
    getUsers(token)
      .then((response) => {
        if (mounted) {
          setUsers(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => (mounted = false);
  }, []);

  const setWhenSelected = (name) => {
    return () => {
      setSelected((oldValues) => ({ ...oldValues, [name]: true }));
    };
  };
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value.toLowerCase() }));
    };
  };

  const handleModal = (item) => {
    setModalInfo(item);
    setIsModal(!isModal);
  };

  function handleSubmit() {
    if (values.email === "") {
      alert("Please Enter All Fields");
      return;
    }
    register(values).then((res) => {
      let message = JSON.stringify(res.data);
      alert(message);
    });
  }

  return (
    <UsersContainer>
      <Title>Users</Title>
      <TableContainer>
        <AddButton onClick={() => setIsModal(!isModal)}>Add</AddButton>
        <UsersList>
          <thead>
            <tr>
              <th key={"editHeader"} id={"edit"}>
                Edit?
              </th>
              <th key={"fnameHeader"} id={`fname`}>
                First Name
              </th>
              <th key={"lnameHeader"} id={`lname`}>
                Last Name
              </th>
              <th key={"emailHeader"} id={`email`}>
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              return (
                <tr key={`${index}userrow`}>
                  <td key={`${index}edit`} headers={`edit`}>
                    <i
                      onClick={() => handleModal(item)}
                      style={{ marginLeft: "20%", cursor: "pointer" }}
                      className='bi bi-pencil-square'></i>
                  </td>
                  <td key={`${index}fname`} headers={`fname`}>
                    {item.firstName}
                  </td>
                  <td key={`${index}lname`} headers={`lname`}>
                    {item.lastName}
                  </td>
                  <td key={`${index}email`} headers={`email`}>
                    {item.email}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </UsersList>
      </TableContainer>
      <Modal
        isModal={isModal}
        setIsModal={setIsModal}
        selected={selected}
        setWhenSelected={setWhenSelected}
        set={set}
        handleSubmit={handleSubmit}
        modalInfo={modalInfo}
        setModalInfo={setModalInfo}
      />
    </UsersContainer>
  );
};

export default Users;

const Modal = ({
  isModal,
  setIsModal,
  selected,
  setWhenSelected,
  set,
  handleSubmit,
  modalInfo,
  setModalInfo,
}) => {
  const handleCloseModal = () => {
    setModalInfo({});
    setIsModal(!isModal);
  };

  return (
    <ModalContainer isModal={isModal}>
      {!modalInfo.username ? (
        <RegisterModal>
          <CloseModal onClick={() => handleCloseModal()}>Close</CloseModal>
          <FormItem onClick={setWhenSelected("email")}>
            <FormLabel isSelected={selected.email}>Email</FormLabel>
            <input type={"email"} onChange={set("email")} required></input>
          </FormItem>
          <FormItem onClick={setWhenSelected("firstName")}>
            <FormLabel isSelected={selected.firstName}>First Name</FormLabel>
            <input onChange={set("firstName")} required></input>
          </FormItem>
          <FormItem onClick={setWhenSelected("lastName")}>
            <FormLabel isSelected={selected.lastName}>Last Name</FormLabel>
            <input onChange={set("lastName")} required></input>
          </FormItem>
          <FormItem onClick={setWhenSelected("username")}>
            <FormLabel isSelected={selected.username}>Username</FormLabel>
            <input onChange={set("username")} required></input>
          </FormItem>
          <FormItem onClick={setWhenSelected("password")}>
            <FormLabel isSelected={selected.password}>Password</FormLabel>
            <input onChange={set("password")} required></input>
          </FormItem>
          <button onClick={handleSubmit}>Save</button>
        </RegisterModal>
      ) : (
        <RegisterModal>
          <CloseModal onClick={handleCloseModal}>Close</CloseModal>
          <FormItem onClick={setWhenSelected("email")}>
            <FormLabel isSelected={true}>Email</FormLabel>
            <input
              type={"email"}
              placeholder={modalInfo.email}
              onChange={set("email")}
              required></input>
          </FormItem>
          <FormItem onClick={setWhenSelected("firstName")}>
            <FormLabel isSelected={true}>First Name</FormLabel>
            <input
              onChange={set("firstName")}
              placeholder={modalInfo.firstName}
              required></input>
          </FormItem>
          <FormItem onClick={setWhenSelected("lastName")}>
            <FormLabel isSelected={true}>Last Name</FormLabel>
            <input
              onChange={set("lastName")}
              placeholder={modalInfo.lastName}
              required></input>
          </FormItem>
          <FormItem onClick={setWhenSelected("username")}>
            <FormLabel isSelected={true}>Username</FormLabel>
            <input
              onChange={set("username")}
              placeholder={modalInfo.username}
              required></input>
          </FormItem>
          <FormItem onClick={setWhenSelected("password")}></FormItem>
          <button onClick={() => alert("clicked")}>Save</button>
        </RegisterModal>
      )}
    </ModalContainer>
  );
};
