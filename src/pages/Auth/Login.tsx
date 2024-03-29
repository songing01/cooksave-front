import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import LongBtn from "@components/Buttons/LongBtn";
import UnderLinedBtn from "@components/Buttons/UnderLinedBtn";

import Form from "@components/Auth/Form";
import Header from "@components/Header/Header";
import { useState } from "react";
import { postMemberLogin } from "@services/api/member";

type Inputs = {
  id: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState<Inputs>({
    id: "",
    password: "",
  });

  const requestLogin = () => {
    const { id, password } = inputs;

    if (id !== "" && password !== "") {
      postMemberLogin({ username: inputs.id, password: inputs.password })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return;
  };

  return (
    <Div>
      <Header isBack={false} />

      <div className="form">
        <Form isLogin={true} inputs={inputs} setInputs={setInputs} />
      </div>

      <div className="bottom">
        <LongBtn text={"로그인"} onClick={requestLogin} />
        <UnderLinedBtn
          text={"회원가입"}
          onClick={() => navigate("/auth/sign-up")}
        />
      </div>
    </Div>
  );
};

export default Login;

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
