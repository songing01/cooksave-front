import React from "react";
import styled from "styled-components";
import BotMessage from "./BotMessage";
import MyMessage from "./MyMessage";

const MessageContainer = () => {
  return (
    <Div>
      <BotMessage />
      <MyMessage />
      <BotMessage />
      <MyMessage />
      <MyMessage />
      <BotMessage />
      <BotMessage />
      <BotMessage />

      <BotMessage />
    </Div>
  );
};

export default MessageContainer;

const Div = styled.div`
  width: 90%;
  box-sizing: border-box;
  padding: 70px 0px 90px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;
