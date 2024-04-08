import { FontBold, FontMedium } from "@style/font.style";
import React from "react";
import styled from "styled-components";

const TextContainer = ({ data }: any) => {
  const { average, balance, budget, count, monthExpense, previousAverage } =
    data;

  return (
    <Div>
      <div className="count">
        <FontMedium size="12px">이달의 요리 횟수</FontMedium>
        <FontBold size="16px">{count}회</FontBold>
      </div>

      <div className="rows">
        <FontMedium>
          <div>
            나의 예산&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{budget}원
          </div>
          <div>
            사용 예산&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
            {monthExpense}원
          </div>
          <div>
            남은 금액&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;{balance}
            원
          </div>
        </FontMedium>
      </div>

      <div className="avg">
        <FontMedium>
          요리 1회당 <br />
          평균 {average}원을 사용했어요
        </FontMedium>
        <FontMedium size="11px" style={{ color: "#7D7D7D" }}>
          지난달 평균 비용: {previousAverage}원
        </FontMedium>
      </div>
    </Div>
  );
};

export default TextContainer;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .rows {
    div {
      display: flex;
    }
  }
`;
