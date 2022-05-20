import React, { useContext } from "react";
import {
  Buttons,
  Card,
  Circle,
  CommitteeInfo,
  CommitteeName,
  Content,
  ContentLoading,
  Header,
  HeaderLoading,
  List,
  LoadingContainer,
} from "./CommitteeCardElements";
import { updateStatus } from "../../pages/api/index";
import { useListContext } from "../../Context/ListContext";

const CommitteeCard = (props) => {
  const { allCommittees, setAllCommittees, list, setList, isLoading } =
    useListContext();
  let mounted = true;
  const tryUpdate = async (id, status) => {
    try {
      await updateStatus(id, status);
      const newList = list.map((item) => {
        if (item._id === id) {
          const updatedItem = {
            ...item,
            status: status,
          };
          return updatedItem;
        }
        return item;
      });
      const newAllCommittees = allCommittees.map((item) => {
        if (item._id === id) {
          const updatedItem = {
            ...item,
            status: status,
          };
          return updatedItem;
        }
        return item;
      });
      if (mounted) {
        setList(newList);
        setAllCommittees(newAllCommittees);
      }
    } catch (err) {
      console.log(err);
    }
  };

  async function handleUpdateStatus(id, status) {
    tryUpdate(id, status);
    return () => (mounted = false);
  }

  return (
    <List isDisplayed={props.isDisplayed}>
      {isLoading ? (
        <Card>
          <Header>
            <HeaderLoading />
          </Header>
          <LoadingContainer>
            <ContentLoading />
            <ContentLoading />
          </LoadingContainer>
        </Card>
      ) : (
        list.map((item) => {
          if (item.status === props.status) {
            return (
              <Card key={item._id}>
                <Header>
                  <CommitteeName>{item.committeeName}</CommitteeName>
                  <i
                    onClick={() => props.toggleModal(item)}
                    className='bi bi-three-dots'></i>
                </Header>
                <Content>
                  <CommitteeInfo>
                    <p>{item.reportId}</p>
                    <p>{item.notes}</p>
                    <p>{item.poc}</p>
                    <p>{item.pocEmail}</p>
                  </CommitteeInfo>
                  <Buttons>
                    <Circle onClick={() => handleUpdateStatus(item._id, 1)}>
                      N
                    </Circle>
                    <Circle onClick={() => handleUpdateStatus(item._id, 2)}>
                      S
                    </Circle>
                    <Circle onClick={() => handleUpdateStatus(item._id, 3)}>
                      F
                    </Circle>
                  </Buttons>
                </Content>
              </Card>
            );
          } else return null;
        })
      )}
    </List>
  );
};

export default CommitteeCard;
