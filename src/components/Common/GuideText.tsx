import { FontBold } from "@style/font.style";
import React from "react";
import styled from "styled-components";

type Props = {
  text: string;
};

const GuideText = ({ text }: Props) => {
  return (
    <Div>
      <FontBold size="16px">{text}</FontBold>
    </Div>
  );
};

export default GuideText;

const Div = styled.div`
  width: 100%;
  padding-left: 5%;
  display: flex;
  align-items: start;
  box-sizing: border-box;
`;
