import { useState } from "react";
import styled from "styled-components";

type Inputs = {
  id: string;
  password: string;
  passwordCheck?: string;
};

type Props = {
  isLogin: boolean;
  inputs: Inputs;
  setInputs: React.Dispatch<React.SetStateAction<Inputs>>;
};

const Form = ({ isLogin, inputs, setInputs }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...inputs,
      [name]: value,
    };

    setInputs(nextInputs);
  };

  return (
    <Div>
      <div className="wrapper">
        <input
          placeholder="아이디"
          name="id"
          onChange={handleChange}
          value={inputs.id}
        />
        <Divider />
      </div>

      <div className="wrapper">
        <input
          placeholder="비밀번호"
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <Divider />
      </div>

      {!isLogin && (
        <div className="wrapper">
          <input
            placeholder="비밀번호 확인"
            type="password"
            name="passwordCheck"
            value={inputs.passwordCheck}
            onChange={handleChange}
          />
          <Divider />
        </div>
      )}
    </Div>
  );
};

export default Form;

const Div = styled.div`
  display: inline-flex;
  padding: 20px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 35px;
  border-radius: 8px;

  input {
    border: none;
    outline: none;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Divider = styled.div`
  width: 300px;
  height: 1px;
  background: #d9d9d9;
`;
