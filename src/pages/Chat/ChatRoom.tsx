import ChatHeader from "@components/Chat/ChatHeader";
import Input from "@components/Chat/Input";
import MessageContainer from "@components/Chat/MessageContainer";
import styled from "styled-components";

const ChatRoom = () => {
  return (
    <Div>
      <ChatHeader />

      <MessageContainer />

      <StyledInput />
    </Div>
  );
};

export default ChatRoom;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInput = styled(Input)``;
