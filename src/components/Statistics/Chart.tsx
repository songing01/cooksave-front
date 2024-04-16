import { FontBold } from "@style/font.style";
import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TypeBar } from "type/statistics";

type Props = {
  list: Array<TypeBar>;
};

const Chart = ({ list }: Props) => {
  const navigate = useNavigate();

  const calculateHeight = (data: number) => {
    if (data == 0) {
      return 1;
    }
    let sum = 0;
    list.map(bar => {
      bar.expense && (sum += bar.expense);
      bar.count && (sum += bar.count);
    });

    return (data / sum) * 145;
  };
  return (
    <Div>
      <BarContainer>
        {list.reverse().map(bar => {
          let data = 0;
          bar.expense && (data = bar.expense);
          bar.count && (data = bar.count);
          const height = calculateHeight(data);

          return (
            <Bar
              key={bar.month}
              height={`${height}px`}
              onClick={() => navigate(`/statistics/${bar.month}-01`)}
            />
          );
        })}
      </BarContainer>
      <Line />
      <MonthContainer>
        {list.map(bar => {
          return (
            <Month key={bar.month} style={{ color: "#7a7a7a" }}>
              <FontBold size="8px">{Number(bar.month.substr(5, 7))}월</FontBold>
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
  align-items: end;
  gap: 2.5%;
`;

const Bar = styled.div<{ height: string }>`
  width: 5.5%;
  max-height: 145px;
  height: ${props => props.height}; //막대 별 높이 설정
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
