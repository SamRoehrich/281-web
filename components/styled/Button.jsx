import styled from "styled-components";
import Text from "./Text";

const StyledButton = styled.button({
  height: "150px",
  widht: "250px",
  borderRadius: "5px",
  backgroundColor: "white",
});

const Button = ({ text, fontSize, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Text fontSize={fontSize}>{text}</Text>
    </StyledButton>
  );
};
export default Button;
