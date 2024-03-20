import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import BotMessage from "./BotMessage";
import MyMessage from "./MyMessage";
import { useRecoilValue } from "recoil";
import { chatListState, chatLoadingState } from "@services/store/chat";

const MessageContainer = () => {
  const isLoading = useRecoilValue(chatLoadingState); //true 이면 마지막 봇의 채팅만 로딩중으로 표시
  const chatList = useRecoilValue(chatListState);

  type ChatItem = {
    role: string;
    content: string;
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatList, isLoading]);

  return (
    <Div ref={scrollRef}>
      {chatList.map((chat: ChatItem) => {
        if (chat.role === "user") {
          return <MyMessage content={chat.content} />;
        } else if (chat.role === "assistant") {
          return <BotMessage content={chat.content} isLoading={false} />;
        }
      })}
      {isLoading && <BotMessage isLoading={true} />}
    </Div>
  );
};

export default MessageContainer;

const Div = styled.div`
  width: 100%;
  max-height: 100svh;
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 70px 20px 90px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`;
