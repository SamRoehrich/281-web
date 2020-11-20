import { useState, useEffect } from "react";
import { useAdminState } from "./admin/AdminState";
import AthleteListItem from "./AthleteListItem";

import Container from "./styled/Container";
import Text from "./styled/Text";

const AthleteList = () => {
  const [athletes, setAthletes] = useState([]);
  const { state } = useAdminState();

  useEffect(() => {
    const data = {
      eventID: state.currentEvent.eventID,
    };
    fetch("http://localhost:5000/event/athletes", {
      body: JSON.stringify(data),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAthletes(data));
  }, [state.currentEvent]);
  return (
    <>
      {athletes !== [] && (
        <Container>
          <Container row spaceBetween margin>
            <Text>First Name</Text>
            <Text>Last Name</Text>
            <Text>Age Catagory</Text>
            <Text>Gender</Text>
          </Container>
          {athletes.map((athlete) => (
            <AthleteListItem athlete={athlete} />
          ))}
        </Container>
      )}
    </>
  );
};
export default AthleteList;
