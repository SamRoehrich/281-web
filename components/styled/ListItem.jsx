import styled from "styled-components";

const Item = styled.div({
  height: "10%",
  width: "100%",
  display: "flex",
  justifyContent: "space-evenly",
  backgroundColor: "blue",
});

const Text = styled.p({
  color: "white",
  fontSize: 15,
});

const ListItem = ({ eventName, eventLocation, eventDate, id }) => {
  const handleClick = () => {};
  return (
    <Item onClick={handleClick}>
      <Text>{eventName}</Text>
      <Text>{eventLocation}</Text>
      <Text>{eventDate}</Text>
    </Item>
  );
};
export default ListItem;
