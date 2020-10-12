import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  width: ${props => props.width ? `${props.width}vw` : "100%"};
  margin: 0 auto;
  justify-content: ${props => props.spaceBetween ? "space-between" : ""};
  align-items: ${props => props.center ? "center" : ""};
  /* margin-top: 50px; */
  margin-left: ${props => props.marginLeft ? props.marginLeft : "0px"};
  height: ${props => props.height ? props.height : ""};
  border: 1px solid black;
`;

export default Container;
