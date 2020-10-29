import { useAdminState } from "../components/admin/AdminState";

import Container from "../components/styled/Container";
import ListItem from "../components/styled/ListItem";

const EventList = ({ user }) => {
  const { state } = useAdminState();
  if (user === "")
    return (
      <Container>
        {state &&
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
  else {
    return (
      <Container height="100%">
        {state !== null &&
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
  }
};
export default EventList;
