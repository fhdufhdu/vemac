import React from "react";
import styled from "styled-components";
import MacroTitleView from "./macro-title-view";
import MacroEditButtonsView from "./macro-edit-buttons-view";
import MacroTable from "./macroTable/macro-table";

const MacroListView = () => {
  return (
    <Wrapper>
      <MacroHeader>
        <MacroTitleView />
        <MacroEditButtonsView />
      </MacroHeader>
      <MacroTable />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 330px;
  display: flex;
  flex-direction: column;
`;

const MacroHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export default MacroListView;
