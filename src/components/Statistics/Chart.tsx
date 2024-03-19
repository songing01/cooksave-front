import { FontBold } from "@style/font.style";
import React from "react";
import styled from "styled-components";

const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];
const Chart = () => {
  return (
    <Div>
      <BarContainer>
        {months.map(month => {
          return <Bar />;
        })}
      </BarContainer>
      <Line />
      <MonthContainer>
        {months.map(month => {
          return (
            <Month style={{ color: "#7a7a7a" }}>
              <FontBold size="8px">{month}</FontBold>
            </Month>
          );
        })}
      </MonthContainer>
    </Div>
  );
};

export default Chart;

const Div = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;

const BarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.5%;
`;

const Bar = styled.div`
  width: 5.5%;
  max-height: 145px;
  height: 145px; //막대 별 높이 설정
  border-radius: 2px 2px 0px 0px;
  background: rgba(0, 76, 146, 0.5);
`;

const Line = styled.div`
  background: var(--grey2);
  width: 100%;
  height: 1px;
`;

const MonthContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Month = styled.div`
  width: 8%;
`;
