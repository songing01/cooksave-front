import Header from "@components/Header/Header";
import MonthlyCard from "@components/Statistics/MonthlyCard";
import grayBtn from "@assets/statistics/btn-gray.png";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FontBold } from "@style/font.style";
import RecipeList from "@components/Recipe/RecipeList";
import NavBar from "@components/NavBar/NavBar";
import ChatbotBtn from "@components/Chat/ChatbotBtn";
import Modal from "@components/Statistics/Modal";
import { getMonthlyHistory } from "@services/api/history";
import { useParams } from "react-router-dom";

const Monthly = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [list, setList] = useState();
  const [budget, setBudget] = useState(0);
  const [refresh, setRefresh] = useState(0);

  const { date } = useParams();

  useEffect(() => {
    date &&
      getMonthlyHistory(date)
        .then(res => {
          setData(res.data);
          setList(res.data.highlightHistoryDtoList);
          setBudget(res.data.budget);
        })
        .catch(err => console.log(err));
  }, [refresh]);

  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          initialBudget={budget}
          setRefresh={setRefresh}
        />
      )}
      <Div>
        <ChatbotBtn />
        <Header isBack={false} title="나의 절약 내역" />
        {date && data && (
          <MonthlyCard data={data} date={date} setRefresh={setRefresh} />
        )}
        <Btn onClick={() => setShowModal(true)}>
          <FontBold size="14px" style={{ color: "#7a7a7a" }}>
            예산 수정
          </FontBold>
          <img className="btn" src={grayBtn} />
        </Btn>
        <History>
          <FontBold size="16px" className="title">
            요리 내역
          </FontBold>
          {list && <RecipeList isHistory={true} list={list} />}
        </History>
        <NavBar />
      </Div>
    </>
  );
};

export default Monthly;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.div`
  margin-top: 10px;
  display: flex;
  width: 90%;

  .btn {
    width: 14px;
    margin-top: 6px;
  }
`;

const History = styled.div`
  width: 100%;
  margin-bottom: 60px;
  .title {
    display: flex;
    margin: 20px 0px 10px 5%;
  }
`;
