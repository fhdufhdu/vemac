import React from "react";
import styled from "styled-components";
import CheckBox from "./checkbox";

const MacroTableTitle = () => {
  return (
    <Wrapper>
      <CheckBoxWrapper>
        <CheckBox />
      </CheckBoxWrapper>
      <NameWrapper>NAME</NameWrapper>
      <DataWrapper>DATA</DataWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #f3f6f9;
  border-radius: 6px 6px 0px 0px;
  height: 21px;
  padding: 11px 0px;

  display: flex;
`;

const CheckBoxWrapper = styled.div`
  margin: 0px 50px 0px 15px;
  width: min-content;
`;
const NameWrapper = styled.div`
  flex-shrink: 0;
  min-width: 70px;

  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height */

  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: #464e5f;
`;
const DataWrapper = styled.div`
  width: 100%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  letter-spacing: 0.03em;

  color: #b5b5c3;
`;

export default MacroTableTitle;
