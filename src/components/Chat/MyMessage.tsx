import React from "react";
import styled from "styled-components";

type Props = {
  content: string;
};

const MyMessage = ({ content }: Props) => {
  return (
    <Div>
      <div className="wrapper">
        <div className="text">{content}</div>
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
    max-width: 249px;
    border-radius: 12px;
    box-sizing: border-box;
    background: var(--blue3);
    padding: 10px;
  }
`;
