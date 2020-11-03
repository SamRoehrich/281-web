import { useAdminState } from "./AdminState";
import AdminEventInfo from "../../components/admin/AdminEventInfo";
import EventList from "../../components/EventList";
import Column from "../../components/styled/Column";
import Container from "../../components/styled/Container";
import { useEffect } from "react";

const AdminDashBoard = ({ events }) => {
  const { dispatch } = useAdminState();

  useEffect(() => {
    dispatch({ type: "load-all-events", payload: events });
  }, []);
  return (
    <Container row width="100">
      <Column width="20">
        <EventList />
      </Column>
      <Column width="80">
        <AdminEventInfo />
      </Column>
    </Container>
  );
};
export default AdminDashBoard;
