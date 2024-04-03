import Header from "@components/Header/Header";
import MonthlyCard from "@components/Statistics/MonthlyCard";
import grayBtn from "@assets/statistics/btn-gray.png";
import React, { useState } from "react";
import styled from "styled-components";
import { FontBold } from "@style/font.style";
import RecipeList from "@components/Recipe/RecipeList";
import NavBar from "@components/NavBar/NavBar";
import ChatbotBtn from "@components/Chat/ChatbotBtn";
import Modal from "@components/Statistics/Modal";

const Monthly = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} initialBudget={30000} />}
      <Div>
        <ChatbotBtn />
        <Header isBack={false} title="나의 절약 내역" />

        <MonthlyCard />

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
          <RecipeList isHistory={true} list={[]} />
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
