import styled from "styled-components";

type Props = {
  isLogin: boolean;
};

const Form = ({ isLogin }: Props) => {
  return (
    <Div>
      <input placeholder="아이디" />
      <Divider />
      <input placeholder="비밀번호" type="password" />

      {!isLogin && (
        <>
          <Divider />
          <input placeholder="비밀번호 확인" type="password" />
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
