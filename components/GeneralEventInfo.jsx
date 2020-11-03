import { useAdminState } from "../components/admin/AdminState";

import Text from "../components/styled/Text";
import Container from "../components/styled/Container";

const GeneralEventInfo = () => {
  const { state } = useAdminState();
  return (
    <>
      {state !== undefined && (
        <Container height="8%" row spaceBetween center>
          <Text>Event Name: {state.currentEvent.eventName}</Text>
          <Text>Event Location: {state.currentEvent.eventLocation}</Text>
          <Text>Event Date: {state.currentEvent.eventDate}</Text>
        </Container>
      )}
    </>
  );
};
export default GeneralEventInfo;
