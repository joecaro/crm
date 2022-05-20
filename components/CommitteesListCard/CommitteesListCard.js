import { useListContext } from "../../Context/ListContext";
import {
  Card,
  CommitteeInfo,
  CommitteeName,
  Content,
  Header,
  List,
} from "./CommitteesListCardElements";

const CommitteesListCard = (props) => {
  const { list } = useListContext();
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
