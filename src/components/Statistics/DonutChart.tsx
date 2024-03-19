import { FontBold } from "@style/font.style";
import React from "react";
import styled from "styled-components";

const DonutChart = () => {
  return (
    <OuterCircle>
      <InnerCircle>
        <FontBold size="40px" className="num">
          86
        </FontBold>
        <FontBold size="20px" className="percentage">
          %
        </FontBold>
      </InnerCircle>
    </OuterCircle>
  );
};

export default DonutChart;

const OuterCircle = styled.div`
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  border-radius: 100%;

  background: conic-gradient(var(--blue2) 86%, #fff 0%);

  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25));

  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerCircle = styled.div`
  background-color: #fff;
  width: 110px;
  height: 110px;
  border-radius: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5fbff;
  box-shadow: 0px 5px 5px 2px rgba(0, 0, 0, 0.25) inset;

  .percentage {
    margin-top: 6px;
  }

  .num {
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;
