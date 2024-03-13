import LongBtn from "@components/Buttons/LongBtn";
import GuideText from "@components/Common/GuideText";
import Header from "@components/Header/Header";
import ConfirmationTable from "@components/Recipe/ConfirmationTable";
import trashcan from "@assets/recipe/trashcan.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type Props = {
  isHistory: boolean;
};

const Confirmation = ({ isHistory }: Props) => {
  const navigate = useNavigate();
  return (
    <Div>
      <Header isBack={true} />
      <GuideText text="재료 차감 내역과 가격을 확인하세요" />
      <div className="price">
        <GuideText text="총 사용 금액: 8000원" />
      </div>

      <ConfirmationTable />
      {isHistory && (
        <DeleteBtn>
          <img src={trashcan} />
        </DeleteBtn>
      )}

      {!isHistory && (
        <div className="bottom">
          <LongBtn
            text="이대로 만들게요"
            onClick={() => navigate("/statistics/23-1")}
          />
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
