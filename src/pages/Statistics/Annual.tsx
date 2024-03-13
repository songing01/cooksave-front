import GuideText from "@components/Common/GuideText";
import Header from "@components/Header/Header";
import React from "react";
import styled from "styled-components";

const Anual = () => {
  return (
    <Div>
      <Header isBack={true} />
      <GuideText text="1년 간의 통계를 확인해보세요" />
    </Div>
  );
};

export default Anual;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
