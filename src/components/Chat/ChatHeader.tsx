import styled from "styled-components";
import back from "@assets/common/back.svg";
import { useNavigate } from "react-router-dom";

const ChatHeader = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <BackButton src={back} onClick={() => navigate(-1)} />
    </Div>
  );
};

export default ChatHeader;

const Div = styled.div`
  max-width: 481px;
  width: 100%;
  background: var(--blue3);

  box-sizing: border-box;
  padding: 12px 20px;
  position: fixed;
  top: 0;
`;

const BackButton = styled.img`
  width: 26px;
  height: 26px;
  flex-shrink: 0;
`;
