import styled from "styled-components";
import send from "@assets/chat/send.svg";
import { useState } from "react";
import { sendMessage } from "@services/api/chat";
import { chatListState, chatLoadingState } from "../../services/store/chat";
import { useRecoilState } from "recoil";

const Input = () => {
  const [content, setContent] = useState("");
  const [chatList, setChatList] = useRecoilState(chatListState);
  const [isLoading, setIsLoading] = useRecoilState(chatLoadingState);

  type ChatItem = {
    role: string;
    content: string;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSend = () => {
    if (content !== "" && isLoading === false) {
      setIsLoading(true);
      setChatList((prev: ChatItem[]) => [
        ...prev,
        { role: "user", content: content },
      ]);
      setContent("");

      sendMessage(content)
        .then(res => {
          setChatList((prev: ChatItem[]) => [
            ...prev,
            { role: "assistant", content: res.choices[0].message.content },
          ]);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <Div>
      <InputField
        placeholder="메세지를 입력하세요"
        onChange={handleChange}
        value={content}
        onKeyDown={handleKeyDown}
        autoFocus
      />

      <Send src={send} onClick={handleSend} />
    </Div>
  );
};

export default Input;

const InputField = styled.input`
  width: 78%;
  height: 35px;
  border-radius: 28px;
  border: 1px solid #d1d1d1;
  padding-left: 20px;
  outline: none;
`;

const Send = styled.img`
  width: 35px;
`;

const Div = styled.div`
  max-width: 481px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  height: 60px;
  background: #fff;
  box-shadow: 0px -3px 27px 0px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
`;
