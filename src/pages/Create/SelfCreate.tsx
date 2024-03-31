import FitBtn from "@components/Buttons/FitBtn";
import LongBtn from "@components/Buttons/LongBtn";
import Header from "@components/Header/Header";
import ItemInput from "@components/Ingredients/Item/ItemInput";
import List from "@components/Ingredients/List/List";
import { postIngredientsTyping } from "@services/api/ingredients";
import { newListState } from "@services/store/ingredients";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { TypeIngredient } from "type/ingredients";

//식재료를 직접 등록하는 페이지
const SelfCreate = () => {
  const [newList, setNewList] = useRecoilState(newListState);
  const [inputs, setInputs] = useState<TypeIngredient>({
    iconId: 1,
    name: "",
    price: 0,
    amount: 1,
  });
  const navigate = useNavigate();

  const addNewItem = () => {
    if (inputs.name === "" || inputs.price === undefined || inputs.amount === 0)
      return;

    setNewList((prev: TypeIngredient[]) => [...prev, inputs]);
    setInputs({
      iconId: 1,
      name: "",
      price: 0,
      amount: 1,
    });
  };

  const requestSelfCreate = () => {
    postIngredientsTyping(newList)
      .then(res => {
        alert("등록이 완료되었습니다.");
        navigate("/");
      })
      .catch(err => alert("등록 오류"));
  };
  return (
    <Div>
      <Header isBack={true} title="식재료 등록" />

      <div className="input">
        <ItemInput inputs={inputs} setInputs={setInputs} />
      </div>

      <div className="btn">
        <FitBtn text="추가하기" onClick={addNewItem} />
      </div>

      <div className="margin">
        <List isEditing={false} isDeletable={true} list={newList} />
      </div>

      <div className="bottom">
        <LongBtn text="등록 완료" onClick={requestSelfCreate} />
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
    width: 100%;
  }

  .btn {
    width: 90%;
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
