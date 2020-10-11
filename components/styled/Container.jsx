import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.row ? "row" : "column"};
  width: ${props => props.wide ? "100%" : "50%"};
  margin: 0 auto;
  margin-top: 50px;
  height: 85%;
`;

export default Container;
