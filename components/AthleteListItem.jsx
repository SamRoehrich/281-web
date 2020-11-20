import Container from "./styled/Container";
import Text from "./styled/Text";

const AthleteListItem = ({ athlete }) => {
  console.log(athlete);
  return (
    <Container row spaceBetween>
      <Text>{athlete.climberFirstName}</Text>
      <Text>{athlete.climberLastName}</Text>
      <Text>{athlete.ageCat}</Text>
      <Text>{athlete.gender}</Text>
    </Container>
  );
};

export default AthleteListItem;
