import { useFormik } from "formik";

import Container from "./styled/Container";
import Form from "../components/styled/Form";
import useFetch from "use-http";
import Button from "./styled/Button";

const SignInForm = () => {
  const { post } = useFetch("http://localhost:5000");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      post("/signin", { email: values.email, password: values.password });
    },
  });
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Log in</button>
      </Form>
    </Container>
  );
};
export default SignInForm;
