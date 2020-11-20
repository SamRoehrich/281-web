import styled from "styled-components";
import { useAdminState } from "../admin/AdminState";

const Item = styled.div({
  height: "10%",
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "white",
});

const Text = styled.p({
  color: "black",
  fontSize: 15,
});

const ListItem = ({ eventName, eventLocation, eventDate, id }) => {
  const { state, dispatch } = useAdminState();
  const handleClick = () => {
    dispatch({ type: "set-current-event", payload: id });
  };
  return (
    <Item onClick={handleClick}>
      <Text>{eventName}</Text>
      <Text>{eventLocation}</Text>
      <Text>{eventDate}</Text>
    </Item>
  );
};
export default ListItem;
