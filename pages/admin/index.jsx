import AdminDashBoard from "../../components/admin/AdminDashboard";

const AdminHome = ({ events }) => {
  return <AdminDashBoard events={events} />;
};
export default AdminHome;

export async function getStaticProps() {
  const data = await fetch("http://localhost:5000/event/all", {
    method: "POST",
  });
  const events = await data.json();
  return {
    props: {
      events,
    },
  };
}
