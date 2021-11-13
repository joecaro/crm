import React, { useContext } from "react";
import { ListContext } from "../ListContext/ListContext";
import {
  Card,
  CommitteeInfo,
  CommitteeName,
  Content,
  Header,
  List,
} from "./CommitteesListCardElements";

const CommitteesListCard = (props) => {
  const { list } = useContext(ListContext);
  return (
    <List>
      {list.map((item) => {
        return (
          <Card key={item._id} onClick={() => props.toggleModal(item)}>
            <Header>
              <CommitteeName>{item.committeeName}</CommitteeName>
            </Header>
            <Content>
              <CommitteeInfo>
                <p>{item.filingFrequency}</p>
                <p>{item.poc}</p>
                <p>{item.pocEmail}</p>
              </CommitteeInfo>
            </Content>
          </Card>
        );
      })}
    </List>
  );
};

export default CommitteesListCard;
