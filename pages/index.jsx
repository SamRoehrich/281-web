import Link from "next/link";

import Button from "../components/styled/Button";
import Container from "../components/styled/Container";

const HomePage = () => {
  return (
    <Container>
      <Link href="/create">
        <Button text="Create an event" />
      </Link>
      <Link href="/signin">
        <Button text="RC Sign in" />
      </Link>
      <Link href="/signup">
        <Button text="Sign up for an Event" />
      </Link>
      <Link href="/scores">
        <Button text="View Live Scores" />
      </Link>
    </Container>
  );
};

export default HomePage;
