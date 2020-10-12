import styled from "styled-components";

const Column = styled.div`
  width: ${(props) => (props.width ? `${props.width}vw` : "15%")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default Column;
