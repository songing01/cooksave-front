import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import LongBtn from "@components/Buttons/LongBtn";
import UnderLinedBtn from "@components/Buttons/UnderLinedBtn";
import LogoHeader from "@components/Header/LogoHeader";
import Form from "@components/Auth/Form";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <LogoHeader />

      <div className="form">
        <Form isLogin={false} />
      </div>

      <div className="bottom">
        <LongBtn text={"회원가입"} />
        <UnderLinedBtn
          text={"이미 계정이 있나요?"}
          onClick={() => navigate("/auth/login")}
        />
      </div>
    </Div>
  );
};

export default SignUp;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .form {
    margin-top: 143px;
  }

  .bottom {
    position: absolute; //하단 고정
    bottom: 14px;

    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
