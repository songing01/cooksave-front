import React from "react";
import styled from "styled-components";
import clip from "@assets/statistics/clip.png";
import { FontBold } from "@style/font.style";
import Chart from "./Chart";
import { TypeBar } from "type/statistics";

type Props = {
  title: string;
  list: Array<TypeBar>;
};
const AnnualCard = ({ title, list }: Props) => {
  return (
    <Div>
      <Clip src={clip} />

      <Top>
        <FontBold size="14px">{title}</FontBold>
        <FontBold size="12px" style={{ color: "#7a7a7a" }}>
          {list[11].month} ~ {list[0].month}
        </FontBold>
      </Top>

      <Chart list={list} />
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
