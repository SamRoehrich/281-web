// contains all event info besides athlete list
import { useAdminState } from "../admin/AdminState";
import Container from "../styled/Container";
import Text from "../styled/Text";
import Column from "../styled/Column";
import AthleteList from "../AthleteList";
import GeneralEventInfo from "../GeneralEventInfo";

const AdminEventInfo = () => {
  const { state } = useAdminState();
  return (
    <>
      {state.currentEvent !== undefined && (
        <Container width="75" height="75vh" border>
          <GeneralEventInfo />
          <Container row width="75" spaceBetween border>
            <Column width="30">
              <Text>Event ID: {state.currentEvent.eventID}</Text>
              <Text>
                Score Keeper Code: {state.currentEvent.scorekeeperCode}
              </Text>
              <Text>Event Code: {state.currentEvent.adminCode}</Text>
              <Text>Edit Authentication Codes</Text>
            </Column>
            <Column width="30">
              <Text>Add athlete</Text>
              <Text>Remove athlete</Text>
              <Text>Edit Score</Text>
              <Text>Delete Event</Text>
            </Column>
            <Column width="30">
              <Text>Start Round</Text>
              <Text>Pause Round</Text>
              <Text>End Round</Text>
              <Text>Print Results</Text>
            </Column>
          </Container>
          <Container>
            <AthleteList />
          </Container>
        </Container>
      )}
    </>
  );
};
export default AdminEventInfo;
