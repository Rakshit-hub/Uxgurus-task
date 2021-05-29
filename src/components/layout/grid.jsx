import * as React from "react";
import styled from "styled-components";

const GridWrapper = styled.section`
display: flex;
flex-wrap: wrap;
`;
const Grid = (props) => {
  return <GridWrapper>{props.children}</GridWrapper>;
};

export default Grid;
