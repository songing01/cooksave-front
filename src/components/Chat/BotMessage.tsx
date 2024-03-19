import React from "react";
import styled from "styled-components";
import chatbot from "@assets/chat/chatbot.svg";
import { FontMedium } from "@style/font.style";

const BotMessage = () => {
  return (
    <Div>
      <div className="profile">
        <img src={chatbot} />
      </div>

      <div className="container">
        <div className="name">
          <FontMedium size="14px"> 쿠쿠</FontMedium>
        </div>
        <div className="text">
          답변 내용답변 내용답변 내용답변 내용답변 내용답변 내용답변 내용답변
          내용답변 내용답변 내용답변 내용답변 내용답변 내용답변 내용답변
          내용답변 내용답변 내용답변 내용답변 내용
        </div>
      </div>
    </Div>
  );
};

export default BotMessage;

const Div = styled.div`
  display: flex;
  gap: 10px;

  .profile {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    box-sizing: border-box;
    border-radius: 100%;

    background-color: var(--blue3);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 40px;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .name {
    display: flex;
  }

  .text {
    width: 249px;
    border-radius: 12px;
    box-sizing: border-box;
    background: var(--grey1);
    padding: 10px;
  }
`;
