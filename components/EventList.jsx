import { useAdminState } from "../components/admin/AdminState";

import Container from "../components/styled/Container";
import ListItem from "../components/styled/ListItem";

const EventList = () => {
  const { state } = useAdminState();
  return (
    <Container height="100%">
      {state.events !== undefined &&
        state.events.map((event) => (
          <ListItem
            eventName={event.eventName}
            eventLocation={event.eventLocation}
            date={event.eventDate}
            id={event.eventID}
            key={event.eventID}
          />
        ))}
    </Container>
  );
};
export default EventList;
