import LongBtn from "@components/Buttons/LongBtn";
import GuideText from "@components/Common/GuideText";
import Header from "@components/Header/Header";
import List from "@components/Ingredients/List/List";
import { myListState, newListState } from "@services/store/ingredients";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { TypeIngredient } from "type/ingredients";

const IngredientList = () => {
  const navigate = useNavigate();
  const { name, id } = useParams();
  let param: string;
  if (name) {
    param = name; //직접 입력 레시피
  } else {
    param = String(id); //제공된 레시피
  }
  const myList = useRecoilValue(myListState);
  const [maxAmountList, setMaxAmountList] = useState([]) as any[];
  const [newList, setNewList] = useRecoilState(newListState);

  useEffect(() => {
    //수량을 0으로 초기화
    setNewList([]);
    myList.map((el: TypeIngredient) => {
      setMaxAmountList((prev: any[]) => [...prev, { amount: el.amount }]);
      setNewList((prev: any[]) => [...prev, { ...el, amount: 0 }]);
    });
  }, []);

  return (
    <Div>
      <Header isBack={true} />
      <GuideText text="사용할 재료와 수량을 선택하세요" />

      <List
        isEditing={true}
        isDeletable={false}
        list={newList}
        maxAmountList={maxAmountList}
        isIconEditable={false}
      />
      <div className="margin" style={{ height: "90px" }} />

      <div className="bottom">
        <LongBtn
          text="선택 완료"
          onClick={() =>
            name
              ? navigate(`/recipes/new/${param}/confirmation`)
              : navigate(`/recipes/${param}/confirmation`)
          }
        />
      </div>
    </Div>
  );
};

export default IngredientList;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

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
