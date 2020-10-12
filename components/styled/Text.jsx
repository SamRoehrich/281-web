import styled from "styled-components";

const Text = styled.p`
  font-size: ${props => props.fontSize ? props.fontSize : "14px"};
  color: #010101;
`;

export default Text;
