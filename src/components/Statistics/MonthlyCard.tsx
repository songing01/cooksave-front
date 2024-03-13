import React from "react";
import styled from "styled-components";
import clip from "@assets/statistics/clip.png";
import btn from "@assets/statistics/btn.png";
import { FontBold } from "@style/font.style";
import DonutChart from "./DonutChart";
import TextContainer from "./TextContainer";

const MonthlyCard = () => {
  return (
    <Div>
      <Clip src={clip} />

      <Top>
        <img className="btn prev" src={btn} />
        <FontBold size="20px">2023.12</FontBold>
        <img className="btn" src={btn} />
      </Top>

      <Mid>
        <DonutChart />
        <TextContainer />
      </Mid>

      <Bottom>
        <FontBold size="12px" style={{ color: "#004c92" }}>
          전체 통계 &nbsp; <img className="btn" src={btn} />
        </FontBold>
      </Bottom>
    </Div>
  );
};

export default MonthlyCard;

const Div = styled.div`
  margin-top: 15px;
  position: relative;
  display: flex;
  width: 90%;
  height: 275px;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
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
  display: flex;
  gap: 12px;
  align-items: center;
  .prev {
    transform: scaleX(-1);
  }

  .btn {
    margin-top: -1px;
    width: 12px;
  }
`;

const Mid = styled.div`
  width: 90%;
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Bottom = styled.div`
  width: 95%;
  display: flex;
  justify-content: end;
  position: relative;

  .btn {
    width: 8px;
    position: absolute;
    top: -1px;
    right: -5px;
  }
`;
