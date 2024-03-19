import styled from "styled-components";
import send from "@assets/chat/send.svg";

const Input = () => {
  return (
    <Div>
      <InputField placeholder="메세지를 입력하세요" />
      <Send src={send} />
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
