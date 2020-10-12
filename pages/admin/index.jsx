import AdminEventInfo from "../../components/admin/AdminEventInfo";
import EventList from "../../components/EventList";
import Column from "../../components/styled/Column";
import Container from "../../components/styled/Container";
import Text from "../../components/styled/Text";
import { AdminState } from "../../components/admin/AdminState"

const AdminHome = () => {
  return (
    <AdminState>
      <Container row width="100">
        <Column width="20">
          <EventList user="sam_roehrich@icloud.com" />
        </Column>
        <Column width="75">
          <AdminEventInfo />
        </Column>
      </Container>
    </AdminState>
  );
};
export default AdminHome;
