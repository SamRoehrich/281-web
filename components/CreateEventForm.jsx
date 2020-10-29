import { useFormik } from "formik";
import Form from "./styled/Form";
const CreateEventForm = () => {
  const formik = useFormik({
    initialValues: {
      eventName: "",
      eventLocation: "",
      eventDate: "",
      rcName: "",
      rcEmail: "",
      numBoulders: 4,
      scorekeeperCode: "",
      adminCode: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      fetch("http://localhost:5000/event/create", {
        method: "POST",
        body: JSON.stringify(values, null, 2),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
  });
  return (
    <Form
      onSubmit={formik.handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="eventName">Event Name</label>
      <input
        id="eventName"
        name="eventName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.eventName}
      />
      <label htmlFor="eventLocation">Event Location</label>
      <input
        id="eventLocation"
        name="eventLocation"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.eventLocation}
      />{" "}
      <label htmlFor="eventDate">Event Date</label>
      <input
        id="eventDate"
        name="eventDate"
        type="date"
        onChange={formik.handleChange}
        value={formik.values.eventDate}
      />{" "}
      <label htmlFor="rcName">Regional Coordinator Name</label>
      <input
        id="rcName"
        name="rcName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.rcName}
      />{" "}
      <label htmlFor="rcEmail">Regional Coordinator email</label>
      <input
        id="rcEmail"
        name="rcEmail"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.rcEmail}
      />{" "}
      <label htmlFor="adminCode">Event Admin Password</label>
      <input
        id="adminCode"
        name="adminCode"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.adminCode}
      />
      <label htmlFor="scorekeeperCode">Event Scorekeeper Passcode</label>
      <input
        id="scorekeeperCode"
        name="scorekeeperCode"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.scorekeeperCode}
      />
      <label htmlFor="numBoulders">Number of Boulders</label>
      <input
        id="numBoulders"
        name="numBoulders"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.numBoulders}
      />
      <button type="submit">Create Event</button>
    </Form>
  );
};
export default CreateEventForm;
