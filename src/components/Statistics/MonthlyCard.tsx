import styled from "styled-components";
import clip from "@assets/statistics/clip.png";
import btn from "@assets/statistics/btn.png";
import { FontBold } from "@style/font.style";
import DonutChart from "./DonutChart";
import TextContainer from "./TextContainer";
import { useNavigate } from "react-router-dom";
import React from "react";

type Props = {
  data: {
    average: number;
    balance: number;
    budget: number;
    count: number;
    //highlightHistoryDtoList: any;
    monthExpense: number;
    percentage: number;
    previousAverage: number;
  };
  date: string;
  setRefresh: React.Dispatch<React.SetStateAction<number>>;
};

const MonthlyCard = ({ data, date, setRefresh }: Props) => {
  const { percentage } = data;
  const navigate = useNavigate();

  const moveNextMonth = () => {
    let year = Number(date.substring(0, 4));
    let month = Number(date.substring(5, 7));

    if (month == 12) {
      year += 1;
      month = 1;
    } else {
      month += 1;
    }

    setRefresh(prev => prev + 1);

    return navigate(
      `/statistics/${String(year)}-${String(month).padStart(2, "0")}-01`,
    );
  };

  const movePrevMonth = () => {
    let year = Number(date.substring(0, 4));
    let month = Number(date.substring(5, 7));

    if (month == 1) {
      year -= 1;
      month = 12;
    } else {
      month -= 1;
    }

    setRefresh(prev => prev + 1);

    return navigate(
      `/statistics/${String(year)}-${String(month).padStart(2, "0")}-01`,
    );
  };

  return (
    <Div>
      <Clip src={clip} />

      <Top>
        <img className="btn prev" src={btn} onClick={movePrevMonth} />
        <FontBold size="20px">
          {date.substring(0, 7).replaceAll("-", ".")}
        </FontBold>
        <img className="btn" src={btn} onClick={moveNextMonth} />
      </Top>

      <Mid>
        <DonutChart percentage={percentage} />
        <TextContainer data={data} />
      </Mid>

      <Bottom>
        <FontBold
          size="12px"
          style={{ color: "#004c92" }}
          onClick={() => navigate("/statistics")}
        >
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
