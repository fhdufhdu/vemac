import React from "react";
import styled from "styled-components";

const PopupInfoView = () => {
  return (
    <Info>
      <CatchPhrase>생산성을 높이는 벨로그 작성!</CatchPhrase>
    </Info>
  );
};

const Info = styled.div`
  width: 172px;
  height: 66px;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  margin-bottom: 5px;
`;

const CatchPhrase = styled.div`
  position: absolute;
  width: 166px;
  height: 16px;

  font-family: S-CoreDream;
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;

  text-align: center;

  color: #000000;
`;

export default PopupInfoView;
