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
      <input
        placeholder="아이디"
        name="id"
        onChange={handleChange}
        value={inputs.id}
      />
      <Divider />
      <input
        placeholder="비밀번호"
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
      />

      {!isLogin && (
        <>
          <Divider />
          <input
            placeholder="비밀번호 확인"
            type="password"
            name="passwordCheck"
            value={inputs.passwordCheck}
            onChange={handleChange}
          />
        </>
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
  gap: 20px;
  border-radius: 8px;
  background: #f5fbff;

  input {
    border: none;
    outline: none;
    background: #f5fbff;
  }
`;

const Divider = styled.div`
  width: 300px;
  height: 1px;
  background: #d9d9d9;
`;
