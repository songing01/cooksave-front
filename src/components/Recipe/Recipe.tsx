import { FontMedium, FontRegular } from "@style/font.style";
import unsaved from "@assets/recipe/unsaved.png";
import saved from "@assets/recipe/saved.png";
import arrow from "@assets/recipe/arrow.png";
import styled from "styled-components";

type Props = {
  isSaved: boolean;
};

const Recipe = ({ isSaved }: Props) => {
  return (
    <Div>
      <Img src="" />

      <Detail>
        <div className="name">
          <FontMedium size="16px">제육볶음</FontMedium>
        </div>
        <div className="ingredients">
          <FontMedium size="13px">보유재료: 돼지고기, 양파, 마늘</FontMedium>
        </div>
      </Detail>

      <Btns>
        {isSaved ? (
          <img className="save" src={saved} />
        ) : (
          <img className="save" src={unsaved} />
        )}
        <img className="arrow" src={arrow} />
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
`;

const Detail = styled.div`
  width: 243px;
  height: 57px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;

  .ingredients {
    color: #7d7d7d;
  }
`;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  .save {
    width: 23px;
  }

  .arrow {
    width: 30px;
  }
`;
