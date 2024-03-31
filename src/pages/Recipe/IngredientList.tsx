import LongBtn from "@components/Buttons/LongBtn";
import GuideText from "@components/Common/GuideText";
import Header from "@components/Header/Header";
import List from "@components/Ingredients/List/List";
import { myListState } from "@services/store/ingredients";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";

const IngredientList = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [myList, setMyList] = useRecoilState(myListState);

  return (
    <Div>
      <Header isBack={true} />
      <GuideText text="사용할 재료와 수량을 선택하세요" />

      <List
        isEditing={true}
        isDeletable={false}
        list={myList}
        isIconEditable={false}
      />
      <div className="margin" style={{ height: "90px" }} />

      <div className="bottom">
        <LongBtn
          text="선택 완료"
          onClick={() => navigate("/recipes/1/confirmation")}
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
