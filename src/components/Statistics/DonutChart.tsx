import { FontBold } from "@style/font.style";
import React from "react";
import { styled } from "styled-components";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { hover } from "@testing-library/user-event/dist/hover";
Chart.register(ArcElement);

const DonutChart = ({ percentage }: any) => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: ["#004c92", "#fff"],
        borderColor: ["#004c92", "#fff"],
      },
    ],
  };

  return (
    <>
      <Div>
        <div className="inner-circle">
          <FontBold size="40px" className="num">
            {percentage}
          </FontBold>
          <FontBold size="20px" className="percentage">
            %
          </FontBold>
        </div>
        <Doughnut
          data={data}
          options={{
            events: [],
            cutout: 48,
          }}
        ></Doughnut>
      </Div>
    </>
  );
};

export default DonutChart;

const Div = styled.div`
  width: 150px;
  height: 150px;
  flex-shrink: 0;

  filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.25));

  .inner-circle {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-43%, 73%);
    display: flex;
    align-items: end;

    .percentage {
      margin-bottom: 5px;
    }
  }
`;
