import React from "react";
import styled from "styled-components";
import clip from "@assets/statistics/clip.png";
import { FontBold } from "@style/font.style";
import Chart from "./Chart";

type Props = {
  title: string;
};
const AnnualCard = ({ title }: Props) => {
  return (
    <Div>
      <Clip src={clip} />

      <Top>
        <FontBold size="14px">{title}</FontBold>
        <FontBold size="12px" style={{ color: "#7a7a7a" }}>
          2023년 2월 ~ 2024년 1월
        </FontBold>
      </Top>

      <Chart />
    </Div>
  );
};

export default AnnualCard;

const Div = styled.div`
  margin-top: 15px;
  position: relative;
  display: flex;
  width: 90%;
  height: 275px;
  padding: 15px;
  flex-direction: column;
  align-items: center;

  flex-shrink: 0;
  box-sizing: border-box;

  border-radius: 10px;
  background: #f9fcff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Clip = styled.img`
  width: 27.159px;
  height: 28.314px;
  flex-shrink: 0;
  position: absolute;
  top: -10px;
  right: 5px;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;
