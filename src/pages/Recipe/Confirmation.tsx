import LongBtn from "@components/Buttons/LongBtn";
import GuideText from "@components/Common/GuideText";
import Header from "@components/Header/Header";
import ConfirmationTable from "@components/Recipe/ConfirmationTable";
import trashcan from "@assets/recipe/trashcan.png";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { newListState } from "@services/store/ingredients";
import { useEffect, useState } from "react";
import {
  patchRecipeIngredients,
  postRecipe,
  postRecipeInput,
} from "@services/api/recipes";
import { TypeIngredient } from "../../type/ingredients";
import { getHistory } from "@services/api/history";
import { deleteHistory } from "../../services/api/history";

type Props = {
  isHistory: boolean;
};

const Confirmation = ({ isHistory }: Props) => {
  const navigate = useNavigate();
  const [newList, setNewList] = useRecoilState(newListState);
  const [total, setTotal] = useState(0);
  const [list, setList] = useState<TypeIngredient[]>([]);
  const { name, id, historyId } = useParams();

  const today = new Date();
  const date = `${today.toISOString().substring(0, 7)}-01`;

  useEffect(() => {
    !historyId && setTotal(calculateTotal());

    historyId &&
      getHistory(Number(historyId)).then(res => {
        setList(res.data.ingredients);
        setTotal(res.data.total);
      });
  }, []);

  const calculateTotal = () => {
    let total = 0;
    newList.map((el: TypeIngredient) => (total = total + el.price * el.amount));
    return total;
  };

  const requestCook = () => {
    //요리 내역 추가
    if (name) {
      //직접 생성한 레시피일 경우
      postRecipeInput({
        name: name,
        total: total,
        list: newList, //바꿔야함
      })
        .then(res => {
          //수량차감
          patchRecipeIngredients({ list: newList }).then(res => {
            alert("요리 내역이 저장되었습니다.");
            navigate(`/statistics/${date}`);
            setNewList([]);
          });
        })
        .catch(err => console.log(err));
    } else {
      //제공된 레시피일 경우
      postRecipe(Number(id), {
        total: total,
        list: newList, //바꿔야함
      })
        .then(res => {
          patchRecipeIngredients({ recipeId: Number(id), list: newList }).then(
            res => {
              alert("요리 내역이 저장되었습니다.");
              navigate(`/statistics/${date}`);
              setNewList([]);
            },
          );
        })
        .catch(err => console.log(err));
    }
  };
  const requestDeleteHistory = () => {
    historyId &&
      deleteHistory(Number(historyId))
        .then(res => {
          alert("요리 내역이 삭제되었습니다.");
          const today = new Date();
          const date = `${today.toISOString().substring(0, 7)}-01`;
          navigate(`/statistics/${date}`);
        })
        .catch(err => alert("삭제 오류"));
  };
  return (
    <Div>
      <Header isBack={true} />
      <GuideText text="재료 차감 내역과 가격을 확인하세요" />
      <div className="price">
        <GuideText text={`총 사용 금액: ${total}원`} />
      </div>

      <ConfirmationTable list={historyId ? list : newList} />
      {isHistory && (
        <DeleteBtn onClick={requestDeleteHistory}>
          <img src={trashcan} />
        </DeleteBtn>
      )}

      {!isHistory && (
        <div className="bottom">
          <LongBtn text="이대로 만들게요" onClick={requestCook} />
        </div>
      )}
    </Div>
  );
};

export default Confirmation;

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

  .price {
    width: 100%;
    margin-top: 30px;
  }
`;

const DeleteBtn = styled.div`
  width: 90%;
  display: flex;
  justify-content: end;
  margin-top: -10px;
  img {
    width: 30px;
  }
`;
