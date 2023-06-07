import React from "react";
import styled from "styled-components";
import MacroTableTitle from "./macro-table-title";
import MacroTableInfo from "./macro-table-info";

const MacroTable = () => {
  return (
    <Wrapper>
      <MacroTableTitle />
      <MacroTableInfo />
      <MacroTableInfo />
      <MacroTableInfo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 24px;
  min-width: 320px;
`;

export default MacroTable;
