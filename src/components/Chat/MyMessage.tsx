import React from "react";
import styled from "styled-components";

const MyMessage = () => {
  return (
    <Div>
      <div className="wrapper">
        <div className="text">
          질문질문질문질문질문 질문질문질문질문
          질문질문질문질문질문질문질문질문질문질문질문질문질문질질문질문
          질문질문 문질문질문질문질문 질문질문질문질문질문질문질문
        </div>
      </div>
    </Div>
  );
};

export default MyMessage;

const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;

  .wrapper {
    width: 249px;
    border-radius: 12px;
    box-sizing: border-box;
    background: var(--blue3);
    padding: 10px;
  }
`;
