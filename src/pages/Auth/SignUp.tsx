import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import LongBtn from "@components/Buttons/LongBtn";
import UnderLinedBtn from "@components/Buttons/UnderLinedBtn";

import Form from "@components/Auth/Form";
import Header from "@components/Header/Header";
import { useState } from "react";
import { postMemberSignup } from "@services/api/member";

export type SignUpInputs = {
  id: string;
  password: string;
  passwordCheck?: string;
};

const SignUp = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<SignUpInputs>({
    id: "",
    password: "",
    passwordCheck: "",
  });

  const requestSignup = () => {
    const { id, password, passwordCheck } = inputs;
    if (
      id !== "" &&
      password !== "" &&
      passwordCheck !== "" &&
      password === passwordCheck
    ) {
      postMemberSignup({
        username: inputs.id,
        password: inputs.password,
        passwordCheck: inputs.passwordCheck,
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    return;
  };

  return (
    <Div>
      <Header isBack={false} />

      <div className="form">
        <Form isLogin={false} inputs={inputs} setInputs={setInputs} />
      </div>

      <div className="bottom">
        <LongBtn text={"회원가입"} onClick={requestSignup} />
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
