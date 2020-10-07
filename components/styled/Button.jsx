import styled from "styled-components";

const StyledButton = styled.button({
  height: "150px",
  widht: "250px",
  borderRadius: "5px",
  backgroundColor: "blue",
});

const Text = styled.p({
  fontSize: 20,
  color: "white",
});

const Button = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Text>{text}</Text>
    </StyledButton>
  );
};
export default Button;
