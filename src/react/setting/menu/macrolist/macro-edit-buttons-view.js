import React from "react";
import styled from "styled-components";

const MacroEditButtonsView = () => {
  return (
    <Wrapper>
      <AddButton>추가</AddButton>
      <DeleteButton>삭제</DeleteButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 10px;

  width: 294px;
  height: 34px;
`;

const AddButton = styled.div`
  width: 80px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #3699ff;
  border-radius: 6px;

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

const DeleteButton = styled.div`
  width: 80px;
  height: 34px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #f64e60;
  border-radius: 6px;

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

export default MacroEditButtonsView;
