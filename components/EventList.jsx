import useFetch from "use-http";

import Container from "../components/styled/Container";
import ListItem from "../components/styled/ListItem";

const EventList = ({ user }) => {
  const { loading, error, data } = useFetch(
    "http://localhost:5000/events",
    {},
    []
  );

  if (user === "")
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
  else {
    return (
      <Container>
        {error && "ERROR!"}
        {loading && "Loading..."}
        {data &&
          data
            .filter((event) => event.rcEmail === user)
            .map((event) => (
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
  }
};
export default EventList;
