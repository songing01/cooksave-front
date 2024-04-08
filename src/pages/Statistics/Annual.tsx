import GuideText from "@components/Common/GuideText";
import Header from "@components/Header/Header";
import AnnualCard from "@components/Statistics/AnnualCard";
import React, { useEffect } from "react";
import styled from "styled-components";

const Annual = () => {
  return (
    <Div>
      <Header isBack={true} />
      <GuideText text="1년 간의 통계를 확인해보세요" />

      <AnnualCard title="사용 금액" />
      <AnnualCard title="요리 횟수" />
    </Div>
  );
};

export default Annual;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
