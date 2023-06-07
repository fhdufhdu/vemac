import React from "react";
import vemacLogo from "../../../logo/logo-popup.jpg";
import github from "../../../logo/github-mark.png";
import styled from "styled-components";
import PopupInfoView from "./popup-info-view";
import SettingBtnView from "./setting-button-view";

const Popup = () => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const myid = chrome.runtime.id;

  const onClickSettingBtn = () => {
    openInNewTab(`chrome-extension://${myid}/dist/setting.html`);
  };

  return (
    <Wrapper>
      <Logo src={vemacLogo}></Logo>
      <PopupInfoView />
      <SettingBtnView onClick={onClickSettingBtn} />
      <Label>
        <GithubBtn
          src={github}
          onClick={() => {
            openInNewTab("https://github.com/fhdufhdu/vemac");
          }}
        />
      </Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  cursur: default;
  width: 250px;
  height: 250px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 172px;
  height: 61px;
  margin-top: 27px;
`;

const Label = styled.div`
  width: 172px;
  height: 19px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const GithubBtn = styled.img`
  width: 19px;
  height: 19px;

  cursor: pointer;
`;

export default Popup;
