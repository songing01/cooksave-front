import FitBtn from "@components/Buttons/FitBtn";
import LongBtn from "@components/Buttons/LongBtn";
import LogoHeader from "@components/Header/LogoHeader";
import List from "@components/Ingredients/List/List";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Editing = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <LogoHeader title="식재료 수정/삭제" />

      <EditBtn>
        <FitBtn text="수정 취소" onClick={() => navigate("/")} />
      </EditBtn>

      <div className="margin">
        <List isEditing={true} />
      </div>

      <div className="bottom">
        <LongBtn text="수정 완료" />
      </div>
    </Div>
  );
};

export default Editing;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .margin {
    margin-bottom: 120px;
  }

  .bottom {
    width: 100%;
    position: fixed; //하단 고정
    bottom: 0px;
    padding-bottom: 14px;
    display: flex;
    justify-content: center;
    background-color: #fff;
  }
`;
const EditBtn = styled.div`
  display: flex;
  justify-content: end;
  width: 356px; // 아래 리스트 아이템과 같은 너비
  margin: 11.5px auto 15.5px;
`;
