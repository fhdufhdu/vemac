import React from "react";
import styled from "styled-components";

const SettingButtonView = ({ onClick }) => {
  return (
    <SettingBtn onClick={onClick}>
      <BtnText>Settings</BtnText>
    </SettingBtn>
  );
};

const SettingBtn = styled.div`
  box-sizing: border-box;
  cursor: pointer;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 48px;
  gap: 10px;

  position: relative;
  width: 149px;
  height: 39px;

  background: rgba(0, 102, 222, 0.01);
  border: 2px solid #535353;
  box-shadow: 4px 4px 0px #535353;
  border-radius: 100px;

  margin-bottom: 10px;

  :hover {
    border: 2px solid #6aba9c;
  }
`;

const BtnText = styled.div`
  width: 53px;
  height: 15px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  color: #535353;
`;

export default SettingButtonView;
