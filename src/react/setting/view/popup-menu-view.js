import React from "react";
import styled from "styled-components";

const PopupMenuView = ({ children }) => {
  return <PopupMenuWrapper>{children}</PopupMenuWrapper>;
};

const PopupMenuWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

export default PopupMenuView;
