import styled from "styled-components";

import icon1 from "@assets/ingredients/icon1.png";
import { FontBold, FontMedium, FontRegular } from "@style/font.style";

const Item = () => {
  return (
    <Div>
      <img className="icon" src={icon1} />

      <Detail>
        <div className="name">
          <FontMedium size="16px">청정원 깐 마늘 200g 1팩</FontMedium>
        </div>
        <div className="price">
          <FontMedium size="13px">2000원</FontMedium>
        </div>
        <div className="date">
          <FontRegular size="10px">등록일 : 2023.11.03 </FontRegular>
        </div>
      </Detail>

      <Count>
        <FontBold size="12px">1</FontBold>
      </Count>
    </Div>
  );
};

export default Item;

const Div = styled.div`
  width: 356px;
  height: 81px;
  border-radius: 6px;
  background: #edf7ff;
  box-sizing: border-box;
  padding: 13px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .icon {
    width: 50px;
  }
`;

const Detail = styled.div`
  width: 216px;
  height: 57px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 2px;

  .price,
  .date {
    color: #7d7d7d;
  }
`;

const Count = styled.div`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  border-radius: 40px;
  background-color: #fff;

  line-height: 27px;
`;
