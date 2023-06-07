import React from "react";
import styled from "styled-components";
import CheckBox from "./checkbox";

const MacroTableInfo = () => {
  return (
    <Wrapper>
      <CheckBoxWrapper>
        <CheckBox />
      </CheckBoxWrapper>
      <NameWrapper>MACRO 1</NameWrapper>
      <DataWrapper>
        fsfsfsdffsfsfsdffadfafsfadfafsfsfsfsdffadfafsfsfsfsdffsfsfsdf
      </DataWrapper>
      <EditButton>수정</EditButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-radius: 6px 6px 0px 0px;
  height: max-content;
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
  align-items: flex-start;
  letter-spacing: 0.03em;

  color: #464e5f;
`;
const DataWrapper = styled.div`
  word-break: break-all;
  height: max-content;
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

const EditButton = styled.div`
  width: 80px;
  height: 20px;
  margin-left: 10px;

  background: #6aba9c;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  font-family: "S-Core Dream";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
`;

export default MacroTableInfo;
