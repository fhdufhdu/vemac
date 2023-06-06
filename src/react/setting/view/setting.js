import React from "react";
import styled from "styled-components";
import PopupHeaderView from "./popup-header-view";
import PopupMenuView from "./popup-menu-view";
import MacroListView from "../menu/macrolist/macro-list-view";

const Setting = () => {
  return (
    <SettingWrapper>
      <PopupHeaderView />
      <PopupMenuView>
        <MacroListView />
      </PopupMenuView>
    </SettingWrapper>
  );
};

const SettingWrapper = styled.div`
  height: 100%;
  margin: 0px 80px;
`;

export default Setting;
