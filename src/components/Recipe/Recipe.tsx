import { FontMedium, FontRegular } from "@style/font.style";
import unsaved from "@assets/recipe/unsaved.png";
import saved from "@assets/recipe/saved.png";
import arrow from "@assets/recipe/arrow.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type Props = {
  isSaved?: boolean;
  isHistory?: boolean;
};

const Recipe = ({ isSaved, isHistory }: Props) => {
  const navigate = useNavigate();
  return (
    <Div>
      <Img src="" />

      <Detail
        onClick={() => {
          !isHistory ? navigate("/recipes/1") : navigate("/history/1");
        }}
      >
        <div className="name">
          <FontMedium size="16px">제육볶음</FontMedium>
        </div>
        {!isHistory ? (
          <div className="gray">
            <FontMedium size="13px">보유재료: 돼지고기, 양파, 마늘</FontMedium>
          </div>
        ) : (
          <div className="gray">
            <FontMedium size="13px">총 사용 금액: 8900원</FontMedium>
          </div>
        )}
      </Detail>

      <Btns>
        {!isHistory ? (
          isSaved ? (
            <img className="save" src={saved} />
          ) : (
            <img className="save" src={unsaved} />
          )
        ) : (
          <div className="date">
            <FontMedium style={{ color: "#7a7a7a" }}>23/12/02</FontMedium>
          </div>
        )}
        <img
          className="arrow"
          src={arrow}
          onClick={() => {
            !isHistory ? navigate("/recipes/1") : navigate("/history/1");
          }}
        />
      </Btns>
    </Div>
  );
};

export default Recipe;

const Div = styled.div`
  width: 90%;
  box-sizing: border-box;
  height: 81px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #edf7ff;
  box-sizing: border-box;
  padding: 13px 9px 13px 13px;
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
`;

const Detail = styled.div`
  width: 243px;
  height: 57px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;

  .gray {
    color: #7d7d7d;
  }
`;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  gap: 15px;

  .save {
    width: 23px;
    margin-right: 3px;
  }

  .arrow {
    width: 30px;
  }
`;
