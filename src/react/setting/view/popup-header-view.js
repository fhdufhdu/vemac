import React from "react";
import styled from "styled-components";
import vemacLogo from "../../../logo/logo-popup.jpg";

const PopupHeaderView = () => {
  return (
    <PopupHeaderWrapper>
      <Logo src={vemacLogo} />
    </PopupHeaderWrapper>
  );
};

const PopupHeaderWrapper = styled.div`
  margin-bottom: 50px;
`;

const Logo = styled.img`
  width: 172px;
  height: 61px;
  margin-top: 27px;
`;

export default PopupHeaderView;
