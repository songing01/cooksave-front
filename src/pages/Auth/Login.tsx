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
      postMemberLogin({ cooksaveId: inputs.id, password: inputs.password })
        .then(res => {
          localStorage.setItem("token", res.data.accessToken);
          //토큰 저장 후 홈 이동
          navigate("/");
          window.location.reload();
        })
        .catch(err => alert("로그인 실패 \n 로그인 정보를 다시 확인하세요."));
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
          onClick={() => navigate("/auth/signup")}
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
