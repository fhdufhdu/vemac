import React from "react";
import vemacLogo from "./vemac_logo.png";
import styled from "styled-components";

const Popup = () => {
  const myid = chrome.runtime.id;

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  return (
    <Wrapper>
      <Logo src={vemacLogo}></Logo>
      <div
        onClick={() =>
          openInNewTab(`chrome-extension://${myid}/dist/setting.html`)
        }
      >
        설정창으로 이동하기
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 350px;
  height: 350px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export default Popup;
