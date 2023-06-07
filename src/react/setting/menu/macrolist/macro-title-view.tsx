import React from "react";
import styled from "styled-components";

const MacroTitleView = () => {
  return (
    <MacroTitleWrapper>
      <Title>매크로 목록</Title>
      <SubTitle>매크로 최대 용량 (0/100KB)</SubTitle>
    </MacroTitleWrapper>
  );
};

const MacroTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 7px;

  width: 195px;
  height: 50px;
`;

const Title = styled.div`
  width: 115px;
  height: 22px;

  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* or 117% */

  color: #212121;
`;

const SubTitle = styled.div`
  width: 158px;
  height: 21px;

  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 21px;

  color: #b5b5c3;
`;

export default MacroTitleView;
