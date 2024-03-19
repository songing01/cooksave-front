import chatbot from "@assets/chat/chatbot.svg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ChatbotBtn = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <Btn onClick={() => navigate("/chat")}>
        <img src={chatbot} />
      </Btn>
    </Div>
  );
};

export default ChatbotBtn;

const Div = styled.div`
  width: 100%;
  max-width: 481px; //position: fixed 로 global style 적용 안됨
  position: fixed;
  bottom: 58px;
  height: 65px;
  padding: 0 10px 0 0;
  box-sizing: border-box;

  display: flex;
  justify-content: end;
`;

const Btn = styled.div`
  animation: motion 0.3s linear 0s infinite alternate;
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 5px;
    }
  }

  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 60px;
  background: #fff;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.18);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 45px;
    height: 45px;
    flex-shrink: 0;
  }
`;
