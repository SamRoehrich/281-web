import useFetch from "use-http";

import Container from "../components/styled/Container";
import ListItem from "../components/styled/ListItem";

const EventList = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:5000/events",
    {},
    []
  );

  return (
    <Container>
      {error && "ERROR!"}
      {loading && "Loading..."}
      {data &&
        data.map((event) => (
          <ListItem
            eventName={event.eventName}
            eventLocation={event.eventLocation}
            date={event.eventDate}
            id={event.id}
            key={event.id}
          />
        ))}
    </Container>
  );
};
export default EventList;
