import FitBtn from "@components/Buttons/FitBtn";
import LongBtn from "@components/Buttons/LongBtn";
import Header from "@components/Header/Header";
import ItemInput from "@components/Ingredients/Item/ItemInput";
import List from "@components/Ingredients/List/List";
import { useState } from "react";
import styled from "styled-components";

//식재료를 직접 등록하는 페이지
const SelfCreate = () => {
  return (
    <Div>
      <Header isBack={true} title="식재료 등록" />

      <div className="input">
        <ItemInput />
      </div>

      <div className="btn">
        <FitBtn text="추가하기" />
      </div>

      <div className="margin">
        <List isEditing={true} />
      </div>

      <div className="bottom">
        <LongBtn text="등록 완료" />
      </div>
    </Div>
  );
};

export default SelfCreate;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 356px;
    margin: 11px auto 25px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  .margin {
    margin-bottom: 120px;
    width: 100%;
  }

  .bottom {
    width: 100%;
    position: fixed; //하단 고정
    bottom: 0px;
    padding: 30px;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
`;
