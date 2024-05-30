import React from "react";
import styled from "styled-components";
import chatbot from "@assets/chat/cooksave-character.svg";
import { FontMedium } from "@style/font.style";
import loading from "@assets/chat/loading.gif";

type Props = {
  content?: string;
  isLoading: boolean;
};

const BotMessage = ({ content, isLoading }: Props) => {
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
          {isLoading ? (
            <img src={loading} alt="loading" className="loading" />
          ) : (
            content
          )}
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
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 249px;
    border-radius: 12px;
    box-sizing: border-box;
    background: var(--grey1);
    padding: 10px;

    .loading {
      height: 40px;
      padding: 0px 20px;
    }
  }
`;
