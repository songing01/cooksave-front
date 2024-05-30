import GuideText from "@components/Common/GuideText";
import Header from "@components/Header/Header";
import AnnualCard from "@components/Statistics/AnnualCard";
import { getAnnualHistory } from "@services/api/history";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { TypeBar } from "type/statistics";

const Annual = () => {
  const today = new Date();
  const date = `${today.toISOString().substring(0, 7)}-01`;
  const [expenseList, setExpenseList] = useState<TypeBar[]>();
  const [countList, setCountList] = useState<TypeBar[]>();

  useEffect(() => {
    getAnnualHistory(date).then(res => {
      setExpenseList(res.data.expenseDtoList);
      setCountList(res.data.countDtoList);
    });
  }, []);

  return (
    <Div>
      <Header isBack={true} />
      <GuideText text="1년 간의 통계를 확인해보세요" />

      {expenseList && <AnnualCard title="사용 금액" list={expenseList} />}
      {countList && <AnnualCard title="요리 횟수" list={countList} />}
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
