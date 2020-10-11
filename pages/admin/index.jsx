import AdminEventInfo from "../../components/admin/AdminEventInfo";
import EventList from "../../components/EventList";
import Column from "../../components/styled/Column";
import Container from "../../components/styled/Container";
import Text from "../../components/styled/Text";
import { AdminState } from "../../components/admin/AdminState"

const AdminHome = () => {
  return (
    <AdminState>
      <Container row wide>
        <Column >
          <Text>Events</Text>
          <EventList user="sam_roehrich@icloud.com" />
        </Column>
        <Container>
          <AdminEventInfo />
        </Container>
      </Container>
    </AdminState>
  );
};
export default AdminHome;
